import { useState } from "react";
import ParticlesBg from "particles-bg";
import Navigation from "./components/Navigation";
import ImageLinkForm from "./components/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition";
import "./App.css";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [showSignIn, setShowSignIn] = useState(true);
  const [imageUrl, setImageUrl] = useState("");
  const [detectedFace, setDetectedFace] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    setIsSignedIn(true);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    setImageUrl("");
    setDetectedFace(false);
  };

  const handleDetect = () => {
    if (imageUrl.trim() !== "") {
      // Simulate face detection
      setDetectedFace(true);
    } else {
      setDetectedFace(false);
    }
  };

  return (
    <>
      <ParticlesBg type="cobweb" bg={true} />
      <div className="relative z-10 min-h-screen px-4 py-8">
        <Navigation
          isSignedIn={isSignedIn}
          showSignIn={showSignIn}
          setShowSignIn={handleSignOut}
        />
        <ImageLinkForm imageUrl={imageUrl} handleDetect={handleDetect} />
        <FaceRecognition detectedFace={detectedFace} imageUrl={imageUrl} />
      </div>
    </>
  );
}

export default App;
