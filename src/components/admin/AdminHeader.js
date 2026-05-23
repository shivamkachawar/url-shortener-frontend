function AdminHeader({ handleLogout }) {

    return (
  
      <div className="mb-8">
  
        <div className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl shadow-xl px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
  
          {/* LEFT */}
          <div className="flex items-center gap-4">
  
            {/* Logo */}
            <div className="w-14 h-14 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-black shadow-lg">
  
              S
  
            </div>
  
            {/* Text */}
            <div>
  
              <div className="flex items-center gap-3 flex-wrap">
  
                <h1 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
                  Sniply Admin
                </h1>
  
                {/* Live Badge */}
                <div className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
  
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
  
                  Live
  
                </div>
  
              </div>
  
              <p className="text-sm text-gray-500 mt-1">
                Manage users, URLs and platform analytics
              </p>
  
            </div>
  
          </div>
  
          {/* RIGHT */}
          <div className="flex items-center gap-3">
  
            
  
            {/* Logout */}
            <button
              onClick={handleLogout}
              className="px-5 py-3 rounded-2xl bg-red-50 border border-red-200 text-red-600 font-semibold hover:bg-red-100 transition shadow-sm"
            >
              Logout
            </button>
  
          </div>
  
        </div>
  
      </div>
    );
  }
  
  export default AdminHeader;