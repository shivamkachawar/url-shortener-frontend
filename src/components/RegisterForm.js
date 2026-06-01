function RegisterForm({
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
  handleRegister,
  setIsLogin,
  loading
}) {

  return (
    

    <div className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-purple-100 overflow-hidden relative flex items-center justify-center px-4 sm:px-6 py-6 sm:py-10">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-150px] left-[-150px] w-[320px] sm:w-[400px] h-[320px] sm:h-[400px] bg-purple-300 opacity-30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-[-180px] right-[-180px] w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] bg-indigo-300 opacity-30 rounded-full blur-3xl"></div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

        {/* LEFT SIDE */}
        <div className="hidden lg:block">

          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm mb-8">

            🚀 Create Your Account

          </div>

          <h1 className="text-6xl font-black leading-tight tracking-tight text-gray-900">

            Join the future of

            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">

              smart links.

            </span>

          </h1>

          <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-xl">

            Sniply helps you create beautiful short URLs,
            generate QR codes, track analytics and manage
            expiration dates with a premium modern experience.

          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-2 gap-4 mt-10 max-w-xl">

            <div className="bg-white/70 backdrop-blur-md border border-white/60 rounded-2xl p-5 shadow-lg">

              <div className="text-3xl mb-3">🔗</div>

              <div className="font-bold text-gray-800">
                Custom URLs
              </div>

              <div className="text-sm text-gray-500 mt-1">
                Personalized short links
              </div>

            </div>

            <div className="bg-white/70 backdrop-blur-md border border-white/60 rounded-2xl p-5 shadow-lg">

              <div className="text-3xl mb-3">📱</div>

              <div className="font-bold text-gray-800">
                QR Sharing
              </div>

              <div className="text-sm text-gray-500 mt-1">
                Instant QR generation
              </div>

            </div>

            <div className="bg-white/70 backdrop-blur-md border border-white/60 rounded-2xl p-5 shadow-lg">

              <div className="text-3xl mb-3">📊</div>

              <div className="font-bold text-gray-800">
                Analytics
              </div>

              <div className="text-sm text-gray-500 mt-1">
                Real-time click tracking
              </div>

            </div>

            <div className="bg-white/70 backdrop-blur-md border border-white/60 rounded-2xl p-5 shadow-lg">

              <div className="text-3xl mb-3">🛡️</div>

              <div className="font-bold text-gray-800">
                Secure Access
              </div>

              <div className="text-sm text-gray-500 mt-1">
                JWT-based authentication
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE REGISTER CARD */}
        <div className="w-full flex justify-center">

          <div className="w-full max-w-md bg-white/80 backdrop-blur-2xl border border-white/60 rounded-[28px] sm:rounded-[32px] shadow-2xl p-6 sm:p-8 md:p-10">

            {/* TOP */}
            <div className="text-center mb-8">

              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white text-2xl sm:text-3xl font-black shadow-xl mb-5">

                S

              </div>

              <h1 className="text-3xl sm:text-4xl font-black text-gray-900">
                Create Account
              </h1>

              <p className="text-sm sm:text-base text-gray-500 mt-2 leading-relaxed">

                Start shortening links with Sniply

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
                  placeholder="Choose a username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={loading}
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white/90 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-700 shadow-sm disabled:opacity-60"
                />

              </div>
              {/* Email */}

<div>

  <label className="text-sm font-semibold text-gray-600 block mb-2">

    Email

  </label>

  <input

    type="email"

    placeholder="Enter your email"

    value={email}

    onChange={(e) => setEmail(e.target.value)}

    disabled={loading}

    className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white/90 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-700 shadow-sm disabled:opacity-60"

  />

</div>

              {/* Password */}
              <div>

                <label className="text-sm font-semibold text-gray-600 block mb-2">

                  Password

                </label>

                <input
                  type="password"
                  placeholder="Create a secure password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white/90 focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-700 shadow-sm disabled:opacity-60"
                />

              </div>

              {/* BUTTON */}
              {/* REGISTER + GOOGLE */}
<div className="grid grid-cols-2 gap-3">

  {/* REGISTER BUTTON */}
  <button
    onClick={handleRegister}
    disabled={loading}
    className={`py-4 rounded-2xl font-bold shadow-xl transition-all flex items-center justify-center ${
      loading
        ? "bg-gray-400 cursor-not-allowed text-white"
        : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:scale-[1.02]"
    }`}
  >
    {loading ? (
      <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin"></div>
    ) : (
      "Register"
    )}
  </button>

  {/* GOOGLE BUTTON */}
  <button
    onClick={() => {
      window.location.href =
        "https://sniply-backend.onrender.com/oauth2/authorization/google";
    }}
    className="py-4 rounded-2xl border border-gray-200 bg-white hover:bg-gray-50 transition flex items-center justify-center gap-2 font-semibold text-gray-700 shadow-sm"
  >
    <img
      src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
      alt="Google"
      className="w-5 h-5"
    />

    <span className="hidden sm:inline">
      Google
    </span>
  </button>

</div>
            </div>

            {/* FOOTER */}
            <div className="mt-8 text-center">

              <p className="text-sm sm:text-base text-gray-500 leading-relaxed">

                Already have an account?{" "}

                <span
                  className="text-indigo-600 font-semibold cursor-pointer hover:text-purple-600 transition"
                  onClick={() => !loading && setIsLogin(true)}
                >

                  Login

                </span>

              </p>

            </div>

            {/* NOTICE */}
            <div className="mt-8 bg-purple-50 border border-purple-100 rounded-2xl p-4">

              <div className="text-sm font-semibold text-purple-700 mb-1">

                Premium experience

              </div>

              <div className="text-xs sm:text-sm text-gray-500 leading-relaxed">

                Create and manage short links beautifully with analytics,
                QR generation and expiry controls.

              </div>

            </div>

            {/* FOOTER LINK */}
            <div className="mt-6 text-center">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-gray-400 hover:text-indigo-600 transition"
              >

                Built with React + Spring Boot

              </a>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default RegisterForm;