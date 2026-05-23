function Home({ onLogin, onRegister }) {

    return (
  
      <div className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-purple-50 text-gray-900 overflow-hidden">
  
        {/* NAVBAR */}
        <nav className="w-full px-6 md:px-12 py-6 flex items-center justify-between">
  
          <div className="flex items-center gap-3">
  
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-black shadow-lg">
              S
            </div>
  
            <div>
              <div className="text-2xl font-black tracking-tight">
                Sniply
              </div>
  
              <div className="text-xs text-gray-400 -mt-1">
                Modern URL Shortener
              </div>
            </div>
  
          </div>
  
          <div className="hidden md:flex items-center gap-4">
  
            <button
              onClick={onLogin}
              className="text-gray-600 hover:text-indigo-600 font-medium transition"
            >
              Login
            </button>
  
            <button
              onClick={onRegister}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              Get Started
            </button>
  
          </div>
  
        </nav>
  
        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid md:grid-cols-2 gap-16 items-center">
  
          {/* LEFT */}
          <div>
  
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-8 shadow-sm">
  
              🔗 Trusted modern URL shortener
  
            </div>
  
            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight">
  
              Short links,
              <br />
  
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
                built beautifully.
              </span>
  
            </h1>
  
            <p className="mt-8 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
  
              Create elegant short URLs, generate QR codes,
              manage expiration dates and track clicks —
              all from one premium dashboard experience.
  
            </p>
  
            {/* CTA */}
            <div className="flex flex-wrap gap-4 mt-10">
  
              <button
                onClick={onLogin}
                className="px-7 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold shadow-xl hover:scale-105 transition"
              >
                Login
              </button>
  
              <button
                onClick={onRegister}
                className="px-7 py-4 rounded-2xl border border-gray-300 bg-white text-gray-700 font-bold hover:bg-gray-100 transition"
              >
                Create Account
              </button>
  
            </div>
  
            {/* Social Proof */}
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-gray-500">
  
              <div className="flex items-center gap-2">
                ⚡ Fast Redirects
              </div>
  
              <div className="flex items-center gap-2">
                📱 QR Generation
              </div>
  
              <div className="flex items-center gap-2">
                📊 Analytics
              </div>
  
            </div>
  
            {/* Wake up note */}
            <div className="mt-10 bg-white/70 backdrop-blur-md border border-indigo-100 rounded-2xl p-4 shadow-sm max-w-xl">
  
              <div className="text-sm font-semibold text-indigo-700 mb-1">
                Free-tier infrastructure
              </div>
  
              <div className="text-sm text-gray-500 leading-relaxed">
                Sniply is hosted on free infrastructure for demo and learning purposes.
                First request may take 30–60 seconds while the backend wakes up.
              </div>
  
            </div>
  
          </div>
  
          {/* RIGHT */}
          <div className="relative">
  
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 blur-3xl opacity-20 rounded-full scale-110"></div>
  
            <div className="relative bg-white/80 backdrop-blur-xl border border-white/60 rounded-[32px] shadow-2xl p-8">
  
              {/* Browser bar */}
              <div className="flex items-center gap-2 mb-6">
  
                <div className="w-3 h-3 rounded-full bg-red-300"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-300"></div>
                <div className="w-3 h-3 rounded-full bg-green-300"></div>
  
              </div>
  
              {/* Original URL */}
              <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
  
                <div className="text-xs uppercase tracking-wide text-gray-400 mb-2">
                  Original URL
                </div>
  
                <div className="text-gray-700 truncate font-medium">
                  https://www.youtube.com/watch?v=dQw4w9WgXcQ
                </div>
  
              </div>
  
              {/* Arrow */}
              <div className="flex justify-center py-6 text-4xl text-indigo-500">
                ↓
              </div>
  
              {/* Short URL */}
              <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-3xl p-6 shadow-xl">
  
                <div className="text-sm opacity-80 mb-3">
                  Short URL
                </div>
  
                <div className="text-3xl font-black break-all">
                  snip--ly.vercel.app/x7KpQ2
                </div>
  
              </div>
  
              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mt-8">
  
                <div className="bg-indigo-50 rounded-2xl p-5 hover:scale-105 transition">
  
                  <div className="text-3xl mb-3">⚡</div>
  
                  <div className="font-bold text-gray-800">
                    Instant Redirects
                  </div>
  
                  <div className="text-sm text-gray-500 mt-1">
                    Ultra fast short links
                  </div>
  
                </div>
  
                <div className="bg-purple-50 rounded-2xl p-5 hover:scale-105 transition">
  
                  <div className="text-3xl mb-3">📱</div>
  
                  <div className="font-bold text-gray-800">
                    QR Codes
                  </div>
  
                  <div className="text-sm text-gray-500 mt-1">
                    Share anywhere easily
                  </div>
  
                </div>
  
                <div className="bg-pink-50 rounded-2xl p-5 hover:scale-105 transition">
  
                  <div className="text-3xl mb-3">📊</div>
  
                  <div className="font-bold text-gray-800">
                    Analytics
                  </div>
  
                  <div className="text-sm text-gray-500 mt-1">
                    Track clicks & usage
                  </div>
  
                </div>
  
                <div className="bg-green-50 rounded-2xl p-5 hover:scale-105 transition">
  
                  <div className="text-3xl mb-3">⏳</div>
  
                  <div className="font-bold text-gray-800">
                    Expiry Control
                  </div>
  
                  <div className="text-sm text-gray-500 mt-1">
                    Auto-expiring links
                  </div>
  
                </div>
  
              </div>
  
            </div>
  
          </div>
  
        </section>
  
        {/* HOW IT WORKS */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 py-24">
  
          <div className="text-center mb-16">
  
            <div className="text-indigo-600 font-semibold mb-4">
              HOW IT WORKS
            </div>
  
            <h2 className="text-4xl md:text-5xl font-black">
              Create short links in seconds
            </h2>
  
          </div>
  
          <div className="grid md:grid-cols-3 gap-8">
  
            <div className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-3xl p-8 shadow-lg">
  
              <div className="text-5xl mb-6">1️⃣</div>
  
              <h3 className="text-2xl font-bold mb-4">
                Paste your URL
              </h3>
  
              <p className="text-gray-600 leading-relaxed">
                Add any long URL and instantly prepare it for sharing.
              </p>
  
            </div>
  
            <div className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-3xl p-8 shadow-lg">
  
              <div className="text-5xl mb-6">2️⃣</div>
  
              <h3 className="text-2xl font-bold mb-4">
                Generate short link
              </h3>
  
              <p className="text-gray-600 leading-relaxed">
                Sniply creates elegant randomized short URLs with QR support.
              </p>
  
            </div>
  
            <div className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-3xl p-8 shadow-lg">
  
              <div className="text-5xl mb-6">3️⃣</div>
  
              <h3 className="text-2xl font-bold mb-4">
                Share anywhere
              </h3>
  
              <p className="text-gray-600 leading-relaxed">
                Use your links across social media, presentations and messaging apps.
              </p>
  
            </div>
  
          </div>
  
        </section>
  
        {/* FOOTER */}
        <footer className="border-t border-gray-200 mt-10">
  
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
  
            <div>
  
              <div className="text-2xl font-black">
                Sniply
              </div>
  
              <div className="text-sm text-gray-500 mt-1">
                Premium URL shortening experience
              </div>
  
            </div>
  
            <div className="flex items-center gap-6 text-sm text-gray-500">
  
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-600 transition"
              >
                GitHub
              </a>
  
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-600 transition"
              >
                LinkedIn
              </a>
  
            </div>
  
          </div>
  
          <div className="text-center text-sm text-gray-400 pb-8">
  
            © 2026 Sniply • Built by Shivam Kachawar
  
          </div>
  
        </footer>
  
      </div>
    );
  }
  
  export default Home;