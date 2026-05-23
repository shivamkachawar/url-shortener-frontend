import { useState } from "react";

function UrlCard({
  item,
  handleDelete,
  handleExtend,
  setQrValue,
  setOriginalUrl
}) {

  

  const [expanded, setExpanded] = useState(false);
  if (!item || !item.shortCode) return null;
  const shortUrl = `https://snip--ly.vercel.app/${item.shortCode}`;

  return (

<div className="group relative overflow-hidden bg-white/80 backdrop-blur-2xl border border-white/60 rounded-[24px] shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
      {/* Glow */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-300 opacity-10 blur-3xl rounded-full"></div>

      {/* COLLAPSED TOP */}
      <div
        onClick={() => setExpanded(!expanded)}
        className="relative z-10 p-4 sm:p-5 cursor-pointer"
      >

        <div className="flex items-start justify-between gap-4">

          {/* LEFT */}
          <div className="flex-1 min-w-0">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold mb-3">

              🔗 Active Link

            </div>

            {/* Short URL */}
            <div className="text-indigo-600 font-black text-sm sm:text-lg break-all leading-relaxed">

              {shortUrl}

            </div>

            {/* Original URL */}
            <div className="text-xs sm:text-sm text-gray-500 mt-2 truncate">

              {item.originalUrl}

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-end gap-3">

            {/* Click Count */}
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4 py-3 rounded-2xl shadow-lg min-w-[90px] text-center">

              <div className="text-2xl sm:text-3xl font-black leading-none">

                {item.clickCount}

              </div>

              <div className="text-[10px] uppercase tracking-wide text-white/80 mt-1">

                Clicks

              </div>

            </div>

            {/* Arrow */}
            <div
              className={`text-gray-400 transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
            >

              ⌄

            </div>

          </div>

        </div>

      </div>

      {/* EXPANDED CONTENT */}
      {expanded && (

        <div className="relative z-10 border-t border-gray-100 px-4 sm:px-5 pb-5 animate-fadeIn">

          {/* Original URL FULL */}
          <div className="mt-5">

            <div className="text-[11px] sm:text-xs uppercase tracking-wide text-gray-400 mb-2">

              Original URL

            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 text-xs sm:text-sm text-gray-600 break-all leading-relaxed">

              {item.originalUrl}

            </div>

          </div>

          {/* Metadata */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">

            {/* Created */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4">

              <div className="text-[11px] text-gray-400 mb-1">

                Created

              </div>

              <div className="text-xs sm:text-sm font-semibold text-gray-700 leading-relaxed break-words">

                {new Date(item.createdAt).toLocaleString()}

              </div>

            </div>

            {/* Expiry */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4">

              <div className="text-[11px] text-gray-400 mb-1">

                Expires

              </div>

              <div className="text-xs sm:text-sm font-semibold text-gray-700 leading-relaxed break-words">

                {item.expiryDate
                  ? new Date(item.expiryDate).toLocaleString()
                  : "No expiry"}

              </div>

            </div>

            {/* Last Accessed */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4">

              <div className="text-[11px] text-gray-400 mb-1">

                Last Accessed

              </div>

              <div className="text-xs sm:text-sm font-semibold text-gray-700 leading-relaxed break-words">

                {item.lastAccessedAt
                  ? new Date(item.lastAccessedAt).toLocaleString()
                  : "Never"}

              </div>

            </div>

          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">

            {/* Copy */}
            <button
              onClick={() => {
                navigator.clipboard.writeText(shortUrl);
                alert("Short URL copied");
              }}
              className="w-full px-4 py-3 rounded-2xl bg-indigo-50 text-indigo-600 font-semibold hover:bg-indigo-100 transition text-sm"
            >

              📋 Copy

            </button>

            {/* Extend */}
            <button
              onClick={() => handleExtend(item.id, item.expiryDate)}
              className="w-full px-4 py-3 rounded-2xl bg-blue-50 text-blue-600 font-semibold hover:bg-blue-100 transition text-sm"
            >

              ⏳ Extend

            </button>

            {/* QR */}
            <button
              onClick={() => {
                setQrValue(shortUrl);
                setOriginalUrl(item.originalUrl);
              }}
              className="w-full px-4 py-3 rounded-2xl bg-purple-50 text-purple-600 font-semibold hover:bg-purple-100 transition text-sm"
            >

              📱 QR Code

            </button>

          </div>

          {/* Delete */}
          <button
            onClick={() => handleDelete(item.id)}
            className="w-full mt-3 px-4 py-3 rounded-2xl bg-red-50 text-red-600 font-semibold hover:bg-red-100 transition text-sm"
          >

            🗑 Delete URL

          </button>

        </div>

      )}

    </div>
  );
}

export default UrlCard;