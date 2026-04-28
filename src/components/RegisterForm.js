function RegisterForm({
  username,
  setUsername,
  password,
  setPassword,
  handleRegister,
  setIsLogin
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-100 px-4">

      {/* Background Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-300 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-indigo-300 opacity-30 rounded-full blur-3xl"></div>

      {/* Card */}
      <div className="relative z-10 bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl p-8 w-full max-w-sm">

        {/* Brand */}
        <div className="text-center mb-6">
          
          <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Sniply
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Create your account
          </p>
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/90"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/90"
          />

          {/* Register Button */}
          <button
            onClick={handleRegister}
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition shadow-md"
          >
            Create Account
          </button>
        </div>

        {/* Footer */}
        <p className="text-sm mt-5 text-center text-gray-500">
          Already have an account?{" "}
          <span
            className="text-indigo-600 font-medium cursor-pointer hover:underline"
            onClick={() => setIsLogin(true)}
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
}

export default RegisterForm;