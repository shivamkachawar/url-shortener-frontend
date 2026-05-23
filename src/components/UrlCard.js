function UrlCard({
  item,
  handleDelete,
  handleExtend,
  setQrValue,
  setOriginalUrl
}) {

  const shortUrl = `https://snip--ly.vercel.app/${item.shortCode}`;

  return (

    <div className="group relative overflow-hidden bg-white/80 backdrop-blur-2xl border border-white/60 rounded-[24px] sm:rounded-[30px] shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-4 sm:p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

      {/* Glow */}
      <div className="absolute top-0 right-0 w-40 sm:w-48 h-40 sm:h-48 bg-indigo-300 opacity-10 blur-3xl rounded-full"></div>

      <div className="relative z-10 flex flex-col xl:flex-row xl:items-start xl:justify-between gap-5 sm:gap-6">

        {/* LEFT */}
        <div className="flex-1 min-w-0">

          {/* Label */}
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold mb-4">

            🔗 Active Short Link

          </div>

          {/* Original URL */}
          <div className="mb-5">

            <div className="text-[11px] sm:text-xs uppercase tracking-wide text-gray-400 mb-2">

              Original URL

            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-3 sm:p-4 text-xs sm:text-sm text-gray-600 break-all leading-relaxed">

              {item.originalUrl}

            </div>

          </div>

          {/* Short URL */}
          <div>

            <div className="text-[11px] sm:text-xs uppercase tracking-wide text-gray-400 mb-2">

              Short URL

            </div>

            <div className="flex flex-col gap-3">

              <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-3 sm:p-4">

                <a
                  href={shortUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 font-black text-sm sm:text-lg break-all hover:text-purple-600 transition leading-relaxed"
                >

                  {shortUrl}

                </a>

              </div>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(shortUrl);
                  alert("Short URL copied");
                }}
                className="w-full sm:w-fit px-4 py-3 rounded-2xl bg-indigo-100 text-indigo-700 font-semibold hover:bg-indigo-200 transition text-sm"
              >

                📋 Copy URL

              </button>

            </div>

          </div>

          {/* Metadata */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 mt-6">

            {/* Created */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4">

              <div className="text-[11px] sm:text-xs text-gray-400 mb-1">

                Created

              </div>

              <div className="text-xs sm:text-sm font-semibold text-gray-700 leading-relaxed break-words">

                {new Date(item.createdAt).toLocaleString()}

              </div>

            </div>

            {/* Expiry */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4">

              <div className="text-[11px] sm:text-xs text-gray-400 mb-1">

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

              <div className="text-[11px] sm:text-xs text-gray-400 mb-1">

                Last Accessed

              </div>

              <div className="text-xs sm:text-sm font-semibold text-gray-700 leading-relaxed break-words">

                {item.lastAccessedAt
                  ? new Date(item.lastAccessedAt).toLocaleString()
                  : "Never"}

              </div>

            </div>

          </div>

          {/* Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">

            {/* Delete */}
            <button
              onClick={() => handleDelete(item.id)}
              className="w-full px-4 py-3 rounded-2xl bg-red-50 text-red-600 font-semibold hover:bg-red-100 transition text-sm"
            >

              🗑 Delete

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

        </div>

        {/* RIGHT */}
        <div className="xl:w-[180px] w-full">

          <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-[24px] sm:rounded-[28px] p-5 sm:p-6 text-white shadow-2xl relative overflow-hidden">

            {/* Glow */}
            <div className="absolute top-0 right-0 w-28 sm:w-32 h-28 sm:h-32 bg-white/10 rounded-full blur-2xl"></div>

            <div className="relative z-10 flex flex-col items-center xl:items-start text-center xl:text-left">

              <div className="text-xs sm:text-sm uppercase tracking-wider opacity-80 mb-3">

                Total Clicks

              </div>

              <div className="text-4xl sm:text-5xl font-black leading-none">

                {item.clickCount}

              </div>

              <div className="mt-4 sm:mt-5 text-xs sm:text-sm text-white/80 leading-relaxed">

                Real-time analytics tracking

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default UrlCard;