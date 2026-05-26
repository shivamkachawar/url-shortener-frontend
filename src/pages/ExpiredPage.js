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
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
  
            <a
              href="/"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
  
              Go to Homepage
  
            </a>
  
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-2xl bg-white border border-gray-200 text-gray-700 font-bold hover:bg-gray-50 transition-all duration-300"
            >
  
              View Project
  
            </a>
  
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