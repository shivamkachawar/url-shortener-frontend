function LoginForm({
  username,
  setUsername,
  password,
  setPassword,
  handleLogin,
  setIsLogin
}) {

  return (

    <div className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-purple-100 overflow-hidden relative flex items-center justify-center px-6 py-10">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-purple-300 opacity-30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-[-180px] right-[-180px] w-[450px] h-[450px] bg-indigo-300 opacity-30 rounded-full blur-3xl"></div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div className="hidden lg:block">

          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm mb-8">

            🔐 Secure Authentication

          </div>

          <h1 className="text-6xl font-black leading-tight tracking-tight text-gray-900">

            Welcome back to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
              Sniply.
            </span>

          </h1>

          <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-xl">

            Create elegant short URLs, generate QR codes,
            track clicks and manage expiration dates —
            all from one premium dashboard.

          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-2 gap-4 mt-10 max-w-xl">

            <div className="bg-white/70 backdrop-blur-md border border-white/60 rounded-2xl p-5 shadow-lg">

              <div className="text-3xl mb-3">⚡</div>

              <div className="font-bold text-gray-800">
                Fast Redirects
              </div>

              <div className="text-sm text-gray-500 mt-1">
                Instant URL shortening
              </div>

            </div>

            <div className="bg-white/70 backdrop-blur-md border border-white/60 rounded-2xl p-5 shadow-lg">

              <div className="text-3xl mb-3">📱</div>

              <div className="font-bold text-gray-800">
                QR Generation
              </div>

              <div className="text-sm text-gray-500 mt-1">
                Share with a quick scan
              </div>

            </div>

            <div className="bg-white/70 backdrop-blur-md border border-white/60 rounded-2xl p-5 shadow-lg">

              <div className="text-3xl mb-3">📊</div>

              <div className="font-bold text-gray-800">
                Analytics
              </div>

              <div className="text-sm text-gray-500 mt-1">
                Track every click
              </div>

            </div>

            <div className="bg-white/70 backdrop-blur-md border border-white/60 rounded-2xl p-5 shadow-lg">

              <div className="text-3xl mb-3">⏳</div>

              <div className="font-bold text-gray-800">
                Expiry Control
              </div>

              <div className="text-sm text-gray-500 mt-1">
                Auto-expiring URLs
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE LOGIN CARD */}
        <div className="w-full flex justify-center">

          <div className="w-full max-w-md bg-white/75 backdrop-blur-xl border border-white/60 rounded-[32px] shadow-2xl p-8 md:p-10">

            {/* TOP */}
            <div className="text-center mb-8">

              <div className="w-16 h-16 mx-auto rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white text-3xl font-black shadow-xl mb-5">

                S

              </div>

              <h1 className="text-4xl font-black text-gray-900">
                Sniply
              </h1>

              <p className="text-gray-500 mt-2">
                Login to continue shortening links
              </p>

            </div>

            {/* FORM */}
            <div className="space-y-5">

              {/* Username */}
              <div>

                <label className="text-sm font-semibold text-gray-600 block mb-2">
                  Username
                </label>

                <input
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white/90 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-700 shadow-sm"
                />

              </div>

              {/* Password */}
              <div>

                <label className="text-sm font-semibold text-gray-600 block mb-2">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white/90 focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-700 shadow-sm"
                />

              </div>

              {/* BUTTON */}
              <button
                onClick={handleLogin}
                className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-4 rounded-2xl font-bold text-lg shadow-xl hover:scale-[1.02] hover:shadow-2xl transition-all"
              >
                Login
              </button>

            </div>

            {/* FOOTER */}
            <div className="mt-8 text-center">

              <p className="text-gray-500">

                Don’t have an account?{" "}

                <span
                  className="text-indigo-600 font-semibold cursor-pointer hover:text-purple-600 transition"
                  onClick={() => setIsLogin(false)}
                >
                  Register
                </span>

              </p>

            </div>

            {/* FREE TIER NOTICE */}
            <div className="mt-8 bg-indigo-50 border border-indigo-100 rounded-2xl p-4">

              <div className="text-sm font-semibold text-indigo-700 mb-1">
                Free-tier backend
              </div>

              <div className="text-xs text-gray-500 leading-relaxed">
                First login may take 30–60 seconds while the backend wakes up.
              </div>

            </div>

            {/* GITHUB */}
            <div className="mt-6 text-center">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-gray-400 hover:text-indigo-600 transition"
              >
                View project on GitHub
              </a>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default LoginForm;