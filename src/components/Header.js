import { useState } from "react";

function Header({ username, handleLogout }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 border-b border-white/30 px-6 py-4 flex rounded-2xl items-center justify-between shadow-[0_4px_20px_rgba(0,0,0,0.05)]">

      {/* 🔗 Brand */}
      <div className="flex items-center gap-3 cursor-pointer group">
        

        <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 bg-clip-text text-transparent tracking-tight">
          Sniply
        </h1>
      </div>

      {/* 👤 User Section */}
      <div className="relative">

        {/* User Pill */}
        <div
          onClick={() => setOpen(!open)}
          className="flex items-center gap-3 bg-white/70 backdrop-blur-md border border-gray-200 px-3 py-2 rounded-full cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
        >

          {/* Avatar */}
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex items-center justify-center font-semibold shadow-sm">
            {username?.charAt(0).toUpperCase()}
          </div>

          {/* Username */}
          <span className="hidden sm:block text-sm font-medium text-gray-700">
            {username}
          </span>

          {/* Arrow */}
          <span
            className={`text-gray-500 text-sm transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          >
            ⌄
          </span>
        </div>

        {/* 🔽 Dropdown */}
        {open && (
          <div className="absolute right-0 mt-3 w-44 bg-white/90 backdrop-blur-lg border border-gray-200 rounded-xl shadow-xl py-2 animate-fadeIn">

            <div className="px-4 py-2 text-xs text-gray-400">
              Signed in as
            </div>

            <div className="px-4 pb-2 text-sm font-medium text-gray-700 border-b">
              {username}
            </div>

            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition"
            >
              🚪 Logout
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default Header;