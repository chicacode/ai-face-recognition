import { useState } from "react";
import { detectFaces, calculateFaceBox } from "./services/clarifai";
import ParticlesBg from "particles-bg";
import Navigation from "./components/Navigation";
import SignInForm from "./components/SignInForm";
import ImageLinkForm from "./components/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [imageUrl, setImageUrl] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [showSignIn, setShowSignIn] = useState(true);
  const [detectedFace, setDetectedFace] = useState(false);
  const [box, setBox] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    setIsSignedIn(true);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    setImageUrl("");
    setDetectedFace(false);
  };

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
          setDetectedFace(true);
          setError("");
        }
      } else {
        setError("No faces detected. Please try another image.");
        setDetectedFace(false);
        setBox({});
        return;
      }
    } catch (err) {
      setError("Error detecting faces. Please try again.");
      console.error("Detection error:", err);
      setBox({});
      setDetectedFace(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ParticlesBg type="cobweb" bg={true} />
      <div className="relative z-10 min-h-screen px-4 py-8">
        {!isSignedIn ? (
          <SignInForm showSignIn={showSignIn} handleSignIn={handleSignIn} />
        ) : (
          <div className="min-h-screen p-6">
            <Navigation
              isSignedIn={isSignedIn}
              showSignIn={showSignIn}
              setShowSignIn={handleSignOut}
            />
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
        )}
      </div>
    </>
  );
}

export default App;
