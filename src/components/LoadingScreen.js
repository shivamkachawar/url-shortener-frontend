function LoadingScreen() {

    return (
  
      <div className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-purple-50 flex items-center justify-center px-6 overflow-hidden relative">
  
        {/* Glow Effects */}
        <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-indigo-300 opacity-20 rounded-full blur-3xl"></div>
  
        <div className="absolute bottom-[-140px] right-[-140px] w-[360px] h-[360px] bg-purple-300 opacity-20 rounded-full blur-3xl"></div>
  
        {/* Card */}
        <div className="relative z-10 bg-white/80 backdrop-blur-xl border border-white/60 rounded-[32px] shadow-2xl p-10 max-w-md w-full text-center">
  
          {/* Logo */}
          <div className="w-20 h-20 mx-auto rounded-[28px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-4xl font-black shadow-xl mb-8">
  
            S
  
          </div>
  
          {/* Spinner */}
          <div className="flex justify-center mb-8">
  
            <div className="w-14 h-14 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
  
          </div>
  
          {/* Title */}
          <h1 className="text-3xl font-black text-gray-900 mb-3">
            Loading Sniply
          </h1>
  
          {/* Subtitle */}
          <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
  
            Waking up backend infrastructure and preparing your dashboard.
  
          </p>
  
          {/* Status Badge */}
          <div className="mt-8 inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold">
  
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 animate-pulse"></div>
  
            Backend warming up...
  
          </div>
  
        </div>
  
      </div>
    );
  }
  
  export default LoadingScreen;