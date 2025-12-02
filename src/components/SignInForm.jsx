import Logo from "./Logo";
 
 const SignInForm = ({ showSignIn, handleSignIn }) => (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <Logo />
        <div className="bg-slate-500/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 shadow-2xl">
          <h2 className="text-2xl font-bold mb-6 text-center">
            {showSignIn ? 'Sign In to Your Account' : 'Create New Account'}
          </h2>
          <div className="space-y-5">
            {!showSignIn && (
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-slate-600/50 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all"
                />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-slate-400/50 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-slate-400/50 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all"
              />
            </div>
            <button
              onClick={handleSignIn}
              className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
            >
              {showSignIn ? 'Sign In' : 'Register'}
            </button>
          </div>
          <div className="mt-6 text-center">
            <button
              onClick={() => setShowSignIn(!showSignIn)}
              className="text-cyan-900 hover:text-cyan-700 text-sm transition-colors"
            >
              {showSignIn
                ? "Don't have an account? Register"
                : 'Already have an account? Sign In'}
            </button>
          </div>
        </div>
        <p className="text-center text-gray-500 text-sm mt-6">
          Advanced AI-powered face detection technology
        </p>
      </div>
    </div>
  );

  export default SignInForm;