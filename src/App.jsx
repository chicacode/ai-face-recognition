import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ParticlesBg from "particles-bg";
import SignIn from "./components/SignIn";
import Register from "./components/Register";
import Home from "./components/Home";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  const handleSignIn = (userData) => {
    setUser(userData);
  };

  const handleRegister = (userData) => {
    setUser(userData);
  };

  const handleSignOut = () => {
    setUser(null);
  };

  return (
    <Router>
       <ParticlesBg type="cobweb" bg={true} />
      <Routes>
        {/* Navigate to SignIn if NOT logged in */}
        <Route
          path="/"
          element={user ? <Navigate to="/home" /> : <Navigate to="/signin" />}
        />
        {/* SignIn Route*/}
        <Route
          path="/signin"
          element={
            user ? <Navigate to="/home" /> : <SignIn onSignIn={handleSignIn} />
          }
        />
        {/* Register Route*/}
        <Route
          path="/register"
          element={
            user ? (
              <Navigate to="/home" />
            ) : (
              <Register onRegister={handleRegister} />
            )
          }
        />
        {/* Home Rout protected*/}

        <Route
          path="/home"
          element={
            user ? (
              <Home user={user} onSignOut={handleSignOut} />
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
