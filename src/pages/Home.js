

function Home({ onLogin, onRegister }) {

  return (

    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center px-6">

      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>

          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🔗 Modern URL Shortener
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">

            Short links,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              {" "}simplified.
            </span>

          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">

            Create short, clean and shareable links instantly.
            Generate QR codes, manage expiry dates and track clicks —
            all in one modern dashboard.

          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">

          <button
  onClick={onLogin}
  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition"
>
  Login
</button>

            <button
  onClick={onRegister}
  className="px-6 py-3 rounded-2xl border border-gray-300 bg-white text-gray-700 font-semibold hover:bg-gray-100 transition"
>
  Register
</button>

          </div>

          {/* Free tier note */}
          <div className="mt-8 text-sm text-gray-400">

            Backend runs on free-tier infrastructure.
            First request may take a few seconds to wake up.

          </div>

        </div>

        {/* RIGHT */}
        <div className="relative">

          <div className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-3xl shadow-2xl p-8">

            {/* Fake short url */}
            <div className="bg-gray-100 rounded-2xl p-4 mb-6">

              <div className="text-sm text-gray-400 mb-2">
                Original URL
              </div>

              <div className="text-gray-700 truncate">
                https://www.youtube.com/watch?v=dQw4w9WgXcQ
              </div>

            </div>

            <div className="flex items-center justify-center text-3xl text-indigo-500 mb-6">
              ↓
            </div>

            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl p-5 shadow-lg">

              <div className="text-sm opacity-80 mb-2">
                Short URL
              </div>

              <div className="text-2xl font-bold break-all">
                snip--ly.vercel.app/x7KpQ2
              </div>

            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mt-8">

              <div className="bg-indigo-50 rounded-2xl p-4">
                <div className="text-2xl mb-2">⚡</div>
                <div className="font-semibold text-gray-700">
                  Instant
                </div>
              </div>

              <div className="bg-purple-50 rounded-2xl p-4">
                <div className="text-2xl mb-2">📱</div>
                <div className="font-semibold text-gray-700">
                  QR Codes
                </div>
              </div>

              <div className="bg-pink-50 rounded-2xl p-4">
                <div className="text-2xl mb-2">📊</div>
                <div className="font-semibold text-gray-700">
                  Analytics
                </div>
              </div>

              <div className="bg-green-50 rounded-2xl p-4">
                <div className="text-2xl mb-2">⏳</div>
                <div className="font-semibold text-gray-700">
                  Expiry Control
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;