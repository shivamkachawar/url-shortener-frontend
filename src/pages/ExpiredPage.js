function ExpiredPage() {

    return (
  
      <div className="min-h-screen bg-gradient-to-br from-white via-red-50 to-orange-100 flex items-center justify-center px-6 overflow-hidden relative">
  
        {/* Glow */}
        <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-red-300 opacity-20 blur-3xl rounded-full"></div>
  
        <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-orange-300 opacity-20 blur-3xl rounded-full"></div>
  
        {/* Card */}
        <div className="relative z-10 w-full max-w-2xl bg-white/80 backdrop-blur-2xl border border-white/60 rounded-[40px] shadow-[0_20px_80px_rgba(0,0,0,0.12)] p-8 sm:p-12 text-center">
  
          {/* Icon */}
          <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center text-white text-5xl shadow-2xl mb-8">
  
            ⛔
  
          </div>
  
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
  
            Link Expired
  
          </div>
  
          {/* Title */}
          <h1 className="text-4xl sm:text-6xl font-black text-gray-900 leading-tight tracking-tight">
  
            This short URL
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
  
              has expired.
  
            </span>
  
          </h1>
  
          {/* Subtitle */}
          <p className="mt-6 text-gray-600 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto">
  
            The shortened link you tried to access is no longer active.
            It may have expired or been removed by its owner.
  
          </p>
  
          {/* Buttons */}
          {/* Buttons */}
<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

  {/* Home */}
  <a
    href="/"
    className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold shadow-xl hover:scale-[1.02] transition-all duration-300"
  >

    Go to Homepage

  </a>

  {/* GitHub Dropdown */}
  <div className="relative group">

    <button
      className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white border border-gray-200 text-gray-700 font-bold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2"
    >

      View Project

      <span className="text-sm">
        ⌄
      </span>

    </button>

    {/* Dropdown */}
    <div className="absolute left-0 sm:left-auto sm:right-0 mt-3 w-64 bg-white/95 backdrop-blur-xl border border-gray-100 rounded-3xl shadow-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">

      {/* Frontend */}
      <a
        href="https://github.com/YOUR_USERNAME/frontend-repo"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-3 px-5 py-4 hover:bg-indigo-50 transition"
      >

        <div className="w-10 h-10 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600">

          ⚛️

        </div>

        <div className="text-left">

          <div className="font-semibold text-gray-800">

            Frontend Repo

          </div>

          <div className="text-xs text-gray-400">

            React + Tailwind + Vercel

          </div>

        </div>

      </a>

      {/* Backend */}
      <a
        href="https://github.com/YOUR_USERNAME/backend-repo"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-3 px-5 py-4 hover:bg-purple-50 transition border-t border-gray-100"
      >

        <div className="w-10 h-10 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600">

          ☕️

        </div>

        <div className="text-left">

          <div className="font-semibold text-gray-800">

            Backend Repo

          </div>

          <div className="text-xs text-gray-400">

            Spring Boot + PostgreSQL

          </div>

        </div>

      </a>

    </div>

  </div>

</div>
  
          {/* Footer */}
          <div className="mt-10 text-sm text-gray-400">
  
            Powered by Sniply • Modern URL Shortener
  
          </div>
  
        </div>
  
      </div>
    );
  }
  
  export default ExpiredPage;