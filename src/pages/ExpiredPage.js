function ExpiredPage() {

    return (
  
      <div className="min-h-screen bg-gradient-to-br from-white via-red-50 to-orange-100 flex items-center justify-center px-4 py-8 overflow-hidden relative">
  
        {/* Glow */}
        <div className="absolute top-[-120px] left-[-120px] w-[260px] sm:w-[350px] h-[260px] sm:h-[350px] bg-red-300 opacity-20 blur-3xl rounded-full"></div>
  
        <div className="absolute bottom-[-150px] right-[-150px] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-orange-300 opacity-20 blur-3xl rounded-full"></div>
  
        {/* Card */}
        <div className="relative z-10 w-full max-w-2xl bg-white/85 backdrop-blur-2xl border border-white/60 rounded-[28px] sm:rounded-[40px] shadow-[0_20px_80px_rgba(0,0,0,0.12)] p-6 sm:p-12 text-center">
  
          {/* Icon */}
          <div className="w-20 h-20 sm:w-28 sm:h-28 mx-auto rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center text-white text-4xl sm:text-5xl shadow-2xl mb-6 sm:mb-8">
  
            ⛔
  
          </div>
  
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-5 sm:mb-6">
  
            Link Expired
  
          </div>
  
          {/* Title */}
          <h1 className="text-3xl sm:text-6xl font-black text-gray-900 leading-tight tracking-tight">
  
            This short URL
  
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 mt-1">
  
              has expired.
  
            </span>
  
          </h1>
  
          {/* Subtitle */}
          <p className="mt-5 sm:mt-6 text-gray-600 text-sm sm:text-xl leading-relaxed max-w-2xl mx-auto">
  
            The shortened link you tried to access is no longer active.
            It may have expired or been removed by its owner.
  
          </p>
  
          {/* Buttons */}
          {/* Buttons */}
<div className="mt-8 sm:mt-10 flex flex-col gap-4 justify-center items-center">

  {/* Home */}
  <a
    href="/"
    className="w-full sm:w-[320px] px-6 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold shadow-xl hover:scale-[1.01] transition-all duration-300 text-sm sm:text-base text-center"
  >

    Go to Homepage

  </a>

  {/* GitHub Dropdown */}
  <div className="relative group w-full sm:w-auto">

    <button
      className="w-full sm:w-[320px] px-6 py-4 rounded-2xl bg-white border border-gray-200 text-gray-700 font-bold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base shadow-sm"
    >

      View Project

      <span className="text-sm transition-transform duration-200 group-hover:rotate-180">
        ⌄
      </span>

    </button>

    {/* Dropdown */}
    <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 top-full mt-3 w-full sm:w-[320px] bg-white/95 backdrop-blur-2xl border border-gray-100 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] overflow-hidden opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">

      {/* Frontend */}
      <a
        href="https://github.com/shivamkachawar/url-shortener-frontend"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-4 px-5 py-4 hover:bg-indigo-50 transition"
      >

        <div className="w-11 h-11 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600 text-lg">

          ⚛️

        </div>

        <div className="text-left">

          <div className="font-bold text-gray-800">

            Frontend Repo

          </div>

          <div className="text-xs text-gray-400">

            React + Tailwind + Vercel

          </div>

        </div>

      </a>

      {/* Backend */}
      <a
        href="https://github.com/shivamkachawar/url-shortner"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-4 px-5 py-4 hover:bg-purple-50 transition border-t border-gray-100"
      >

        <div className="w-11 h-11 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 text-lg">

          ☕️

        </div>

        <div className="text-left">

          <div className="font-bold text-gray-800">

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
          <div className="mt-8 sm:mt-10 text-xs sm:text-sm text-gray-400">
  
            Powered by Sniply • Modern URL Shortener
  
          </div>
  
        </div>
  
      </div>
    );
  }
  
  export default ExpiredPage;