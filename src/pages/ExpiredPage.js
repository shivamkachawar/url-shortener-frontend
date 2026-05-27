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
<div className="mt-8 sm:mt-10 flex flex-col gap-4">

  {/* Home */}
  <a
    href="/"
    className="w-full px-6 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold shadow-xl hover:scale-[1.01] transition-all duration-300 text-sm sm:text-base text-center"
  >

    Go to Homepage

  </a>

  {/* Repo Buttons */}
  <div className="grid grid-cols-2 gap-4">

    {/* Frontend */}
    <a
      href="https://github.com/shivamkachawar/url-shortener-frontend"
      target="_blank"
      rel="noreferrer"
      className="flex flex-col items-center justify-center gap-2 px-4 py-4 rounded-2xl bg-white border border-gray-200 hover:bg-indigo-50 transition-all duration-300 shadow-sm"
    >

      <div className="w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600 text-xl">

        ⚛️

      </div>

      <div className="text-center">

        <div className="font-bold text-gray-800 text-sm sm:text-base">

          Frontend

        </div>

        <div className="text-[11px] sm:text-xs text-gray-400 mt-1">

          React + Tailwind

        </div>

      </div>

    </a>

    {/* Backend */}
    <a
      href="https://github.com/shivamkachawar/url-shortner"
      target="_blank"
      rel="noreferrer"
      className="flex flex-col items-center justify-center gap-2 px-4 py-4 rounded-2xl bg-white border border-gray-200 hover:bg-purple-50 transition-all duration-300 shadow-sm"
    >

      <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 text-xl">

        ☕️

      </div>

      <div className="text-center">

        <div className="font-bold text-gray-800 text-sm sm:text-base">

          Backend

        </div>

        <div className="text-[11px] sm:text-xs text-gray-400 mt-1">

          Spring Boot + PostgreSQL

        </div>

      </div>

    </a>

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