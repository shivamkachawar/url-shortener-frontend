import { useState } from "react";

function Header({ username, handleLogout }) {

  const [open, setOpen] = useState(false);

  return (

    <div className="sticky top-4 z-50 mb-8">

      <div className="backdrop-blur-2xl bg-white/70 border border-white/50 rounded-[28px] px-5 sm:px-6 py-4 flex items-center justify-between shadow-[0_10px_40px_rgba(0,0,0,0.08)]">

        {/* LEFT */}
        <div className="flex items-center gap-4">

          {/* Logo */}
          <div className="relative">

            <div className="w-14 h-14 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-black shadow-xl">

              S

            </div>

            {/* Glow */}
            <div className="absolute inset-0 bg-indigo-400 blur-2xl opacity-20 rounded-full"></div>

          </div>

          {/* Branding */}
          <div>

            <div className="flex items-center gap-3 flex-wrap">

              <h1 className="text-2xl font-black tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">

                Sniply

              </h1>

              {/* Badge */}
              <div className="hidden sm:flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">

                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>

                Live

              </div>

            </div>

            <p className="hidden sm:block text-sm text-gray-500 mt-0.5">

              Premium URL shortening dashboard

            </p>

          </div>

        </div>

        {/* RIGHT */}
        <div className="relative">

          {/* User Pill */}
          <div
            onClick={() => setOpen(!open)}
            className="group flex items-center gap-3 bg-white/80 backdrop-blur-md border border-gray-200 px-3 py-2 rounded-2xl cursor-pointer hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
          >

            {/* Avatar */}
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white flex items-center justify-center font-black text-lg shadow-lg">

              {username?.charAt(0).toUpperCase()}

            </div>

            {/* User Info */}
            <div className="hidden sm:block text-left">

              <div className="text-sm font-bold text-gray-800 leading-tight">

                {username}

              </div>

              <div className="text-xs text-gray-400">

                Logged in

              </div>

            </div>

            {/* Arrow */}
            <div
              className={`text-gray-400 text-sm transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            >
              ⌄
            </div>

          </div>

          {/* DROPDOWN */}
          {open && (

            <div className="absolute right-0 mt-4 w-64 bg-white/90 backdrop-blur-2xl border border-white/60 rounded-3xl shadow-2xl overflow-hidden animate-fadeIn z-50">

              {/* Top */}
              <div className="p-5 border-b border-gray-100">

                <div className="flex items-center gap-4">

                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white flex items-center justify-center font-black text-xl shadow-lg">

                    {username?.charAt(0).toUpperCase()}

                  </div>

                  <div>

                    <div className="font-bold text-gray-900">

                      {username}

                    </div>

                    <div className="text-sm text-gray-400">

                      Sniply User

                    </div>

                  </div>

                </div>

              </div>

              {/* Actions */}
<div className="p-3">

  {/* Section Label */}
  <div className="px-3 pb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">

    Project Links

  </div>

  {/* Frontend */}
  <a
    href="https://github.com/shivamkachawar/url-shortener-frontend"
    target="_blank"
    rel="noreferrer"
    className="w-full flex items-center justify-between px-4 py-3 rounded-2xl hover:bg-gray-50 transition group"
  >

    <div className="flex items-center gap-3">

      <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">

        🎨

      </div>

      <div className="text-left">

        <div className="font-semibold text-gray-800">
          Frontend Repo
        </div>

        <div className="text-xs text-gray-400">
          React + Tailwind
        </div>

      </div>

    </div>

    <span className="text-gray-300 group-hover:text-indigo-500 transition">
      ↗
    </span>

  </a>

  {/* Backend */}
  <a
    href="https://github.com/shivamkachawar/url-shortner"
    target="_blank"
    rel="noreferrer"
    className="w-full flex items-center justify-between px-4 py-3 rounded-2xl hover:bg-gray-50 transition group"
  >

    <div className="flex items-center gap-3">

      <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">

        ⚙️

      </div>

      <div className="text-left">

        <div className="font-semibold text-gray-800">
          Backend Repo
        </div>

        <div className="text-xs text-gray-400">
          Spring Boot API
        </div>

      </div>

    </div>

    <span className="text-gray-300 group-hover:text-purple-500 transition">
      ↗
    </span>

  </a>

  {/* Divider */}
  <div className="border-t border-gray-100 my-3"></div>

  {/* Logout */}
  <button
    onClick={handleLogout}
    className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-red-600 hover:bg-red-50 transition font-semibold"
  >

    <span className="text-lg">
      🚪
    </span>

    Logout

  </button>

</div>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default Header;