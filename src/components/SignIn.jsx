import { use, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInUser } from "../services/api";
import Logo from "./Logo";

export default function SignIn({ onSignIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      const data = await signInUser(email, password);
      onSignIn(data.user);
      navigate("/home");
    } catch (err) {
      setError(err.message || "Sign In failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <Logo />
        <div className="bg-slate-500/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 shadow-2xl">
          <h2 className="text-zinc-700 text-2xl font-bold mb-6 text-center">
            Sign In to Your Account
          </h2>

          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-slate-400/50 border border-slate-700 rounded-xl text-slate-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-slate-400/50 border border-slate-700 rounded-xl text-slate-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-slate-500 to-blue-900 hover:from-cyan-600 hover:to-blue-900 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link
              to="/register"
              className="text-slate-700 hover:text-slate-900 text-sm transition-colors"
            >
              Don't have an account? Register
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
