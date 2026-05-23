function UrlCard({
  item,
  handleDelete,
  handleExtend,
  setQrValue,
  setOriginalUrl
}) {

  const shortUrl = `https://snip--ly.vercel.app/${item.shortCode}`;

  return (

    <div className="group relative overflow-hidden bg-white/75 backdrop-blur-2xl border border-white/60 rounded-[30px] shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

      {/* Glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-300 opacity-10 blur-3xl rounded-full"></div>

      <div className="relative z-10 flex flex-col xl:flex-row xl:items-start xl:justify-between gap-6">

        {/* LEFT */}
        <div className="flex-1 min-w-0">

          {/* Label */}
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold mb-4">

            🔗 Active Short Link

          </div>

          {/* Original URL */}
          <div className="mb-5">

            <div className="text-xs uppercase tracking-wide text-gray-400 mb-2">

              Original URL

            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 text-sm text-gray-600 break-all leading-relaxed">

              {item.originalUrl}

            </div>

          </div>

          {/* Short URL */}
          <div>

            <div className="text-xs uppercase tracking-wide text-gray-400 mb-2">

              Short URL

            </div>

            <div className="flex flex-col lg:flex-row lg:items-center gap-3">

              <a
                href={shortUrl}
                target="_blank"
                rel="noreferrer"
                className="text-lg sm:text-xl font-black text-indigo-600 hover:text-purple-600 break-all transition"
              >

                {shortUrl}

              </a>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(shortUrl);
                  alert("Short URL copied");
                }}
                className="w-fit px-4 py-2 rounded-xl bg-indigo-50 text-indigo-600 font-semibold hover:bg-indigo-100 transition"
              >

                Copy

              </button>

            </div>

          </div>

          {/* Metadata */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">

            {/* Created */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4">

              <div className="text-xs text-gray-400 mb-1">
                Created
              </div>

              <div className="text-sm font-semibold text-gray-700">

                {new Date(item.createdAt).toLocaleString()}

              </div>

            </div>

            {/* Expiry */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4">

              <div className="text-xs text-gray-400 mb-1">
                Expires
              </div>

              <div className="text-sm font-semibold text-gray-700">

                {item.expiryDate
                  ? new Date(item.expiryDate).toLocaleString()
                  : "No expiry"}

              </div>

            </div>

            {/* Last Accessed */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4">

              <div className="text-xs text-gray-400 mb-1">
                Last Accessed
              </div>

              <div className="text-sm font-semibold text-gray-700">

                {item.lastAccessedAt
                  ? new Date(item.lastAccessedAt).toLocaleString()
                  : "Never"}

              </div>

            </div>

          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 mt-6">

            <button
              onClick={() => handleDelete(item.id)}
              className="px-5 py-3 rounded-2xl bg-red-50 text-red-600 font-semibold hover:bg-red-100 transition"
            >

              🗑 Delete

            </button>

            <button
              onClick={() => handleExtend(item.id, item.expiryDate)}
              className="px-5 py-3 rounded-2xl bg-blue-50 text-blue-600 font-semibold hover:bg-blue-100 transition"
            >

              ⏳ Extend

            </button>

            <button
              onClick={() => {
                setQrValue(shortUrl);
                setOriginalUrl(item.originalUrl);
              }}
              className="px-5 py-3 rounded-2xl bg-purple-50 text-purple-600 font-semibold hover:bg-purple-100 transition"
            >

              📱 QR Code

            </button>

          </div>

        </div>

        {/* RIGHT */}
        <div className="xl:w-[180px]">

          <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-[28px] p-6 text-white shadow-2xl relative overflow-hidden">

            {/* Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>

            <div className="relative z-10">

              <div className="text-sm uppercase tracking-wider opacity-80 mb-3">

                Total Clicks

              </div>

              <div className="text-5xl font-black leading-none">

                {item.clickCount}

              </div>

              <div className="mt-5 text-sm text-white/80">

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