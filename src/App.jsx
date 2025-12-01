import { useState } from "react";
import Header from "./components/Header";
import Logo from "./components/Logo";
import ImageLinkForm from "./components/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-gray-900 min-h-screen text-white">
        <Header />
        <Logo />
        <ImageLinkForm />
        <FaceRecognition />
      </div>
    </>
  );
}

export default App;
