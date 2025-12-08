import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/api";
import Logo from "./Logo";

export default function Register({ onRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic validation
    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const data = await registerUser(name, email, password);
      onRegister(data.user);
      navigate("/home");
    } catch (err) {
      setLoading(false);
      setError(err.message || "Registration failed. Please try again.");
      return;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen backdrop-grayscale-50 text-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Logo />
        {/* Register Form */}
        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-500/20 rounded-2xl p-8 shadow-2xl">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Create New Account
          </h2>

          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-md font-medium text-gray-800 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-md font-medium text-gray-800 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-md font-medium text-gray-800 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 bg-gradient-to-r from-slate-500 to-blue-900 hover:from-zinc-300 hover:to-blue-900 rounded-xl font-semibold transition-all duration-300 ${
                loading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:scale-105 shadow-sm hover:shadow-slate-500/50"
              }`}
            >
              {loading ? "Creating Account" : "Register"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link
              to="/signin"
              className="text-gray-800 hover:text-blue-900 text-sm transition-colors"
            >
              Already have an account? Sign In
            </Link>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          Advanced AI-powered face detection technology
        </p>
      </div>
    </div>
  );
}
