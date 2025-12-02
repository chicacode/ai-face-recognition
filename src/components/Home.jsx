import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { detectFaces, calculateFaceBox } from "../services/clarifai";
import ParticlesBg from "particles-bg";

import ImageLinkForm from "./ImageLinkForm";
import FaceRecognition from "./FaceRecognition";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Home({ user, onSignOut }) {
  const [imageUrl, setImageUrl] = useState("");
  const [box, setBox] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const url = e.target.value;
    setImageUrl(url);
  };

  const handleDetect = async () => {
    if (!imageUrl || imageUrl.trim() === "") {
      setError("Please enter an image URL - Image URL cannot be empty.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await detectFaces(imageUrl);
      console.log("Clarifai Response:", response);

      if (
        response.outputs[0].data.regions &&
        response.outputs[0].data.regions.length > 0
      ) {
        const regions = response.outputs[0].data.regions;

        const img = document.getElementById("inputimage");
        if (img) {
          const faceBox = calculateFaceBox(regions[0], img.width, img.height);
          setBox(faceBox);
          setError("");
          setImageUrl("");
        }
      } else {
        setError("No faces detected. Please try another image.");
        setBox({});
        return;
      }
    } catch (err) {
      setError("Error detecting faces. Please try again.");
      console.error("Detection error:", err);
      setBox({});
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = () => {
    console.log("Signing out...");
    setImageUrl("");
    onSignOut();
    navigate("/signin");
  };

  return (
    <div>
      <ParticlesBg type="cobweb" bg={true} />
      <div className="relative z-10 min-h-screen px-4 py-8">
        <div className="min-h-screen p-6">
          <Navigation user={user} handleSignOut={handleSignOut} />
          <ImageLinkForm
            onInputChange={handleInputChange}
            onDetect={handleDetect}
            loading={loading}
          />
          {error && (
            <div className="text-red-400 text-center mb-4">{error}</div>
          )}
          <FaceRecognition imageUrl={imageUrl} box={box} />

          <Footer />
        </div>
      </div>
    </div>
  );
}
