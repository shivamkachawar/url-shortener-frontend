function ExpiredPage() {

    return (
  
      <div className="h-screen bg-gradient-to-br from-white via-red-50 to-orange-100 flex items-center justify-center px-4 overflow-hidden relative">
  
        {/* Glow */}
        <div className="absolute top-[-120px] left-[-120px] w-[220px] sm:w-[320px] h-[220px] sm:h-[320px] bg-red-300 opacity-20 blur-3xl rounded-full"></div>
  
        <div className="absolute bottom-[-140px] right-[-140px] w-[260px] sm:w-[360px] h-[260px] sm:h-[360px] bg-orange-300 opacity-20 blur-3xl rounded-full"></div>
  
        {/* Card */}
        <div className="relative z-10 w-full max-w-xl bg-white/85 backdrop-blur-2xl border border-white/60 rounded-[28px] sm:rounded-[36px] shadow-[0_20px_80px_rgba(0,0,0,0.12)] p-5 sm:p-8 text-center">
  
          {/* Icon */}
          <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center text-white text-3xl sm:text-4xl shadow-2xl mb-5 sm:mb-6">
  
            ⛔
  
          </div>
  
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-5">
  
            Link Expired
  
          </div>
  
          {/* Title */}
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 leading-tight tracking-tight">
  
            This short URL
  
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 mt-1">
  
              has expired.
  
            </span>
  
          </h1>
  
          {/* Subtitle */}
          <p className="mt-4 text-gray-600 text-sm sm:text-lg leading-relaxed max-w-xl mx-auto">
  
            The shortened link you tried to access is no longer active.
            It may have expired or been removed by its owner.
  
          </p>
  
          {/* Buttons */}
          <div className="mt-6 flex flex-col gap-3">
  
            {/* Home */}
            <a
              href="/"
              className="w-full px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold shadow-xl hover:scale-[1.01] transition-all duration-300 text-sm sm:text-base text-center"
            >
  
              Go to Homepage
  
            </a>
  
            {/* Repo Buttons */}
            <div className="grid grid-cols-2 gap-3">
  
              {/* Frontend */}
              <a
                href="https://github.com/shivamkachawar/url-shortener-frontend"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white border border-gray-200 hover:bg-indigo-50 transition-all duration-300 shadow-sm"
              >
  
                <div className="w-10 h-10 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600 text-lg">
  
                  ⚛️
  
                </div>
  
                <div className="text-center">
  
                  <div className="font-bold text-gray-800 text-sm">
  
                    Frontend
  
                  </div>
  
                  <div className="text-[10px] sm:text-xs text-gray-400 mt-1">
  
                    React + Tailwind
  
                  </div>
  
                </div>
  
              </a>
  
              {/* Backend */}
              <a
                href="https://github.com/shivamkachawar/url-shortner"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white border border-gray-200 hover:bg-purple-50 transition-all duration-300 shadow-sm"
              >
  
                <div className="w-10 h-10 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 text-lg">
  
                  ☕️
  
                </div>
  
                <div className="text-center">
  
                  <div className="font-bold text-gray-800 text-sm">
  
                    Backend
  
                  </div>
  
                  <div className="text-[10px] sm:text-xs text-gray-400 mt-1">
  
                    Spring Boot + PostgreSQL
  
                  </div>
  
                </div>
  
              </a>
  
            </div>
  
          </div>
  
          {/* Footer */}
          <div className="mt-5 text-xs text-gray-400">
  
            Powered by Sniply • Modern URL Shortener
  
          </div>
  
        </div>
  
      </div>
    );
  }
  
  export default ExpiredPage;