function CreateUrlCard({
  url, setUrl,
  expiry, setExpiry,
  customCode, setCustomCode,
  handleShorten,
  setQrValue,
  shortUrl
}) {

  const publicShortUrl = shortUrl
    ? shortUrl.replace(
        "https://sniply-backend.onrender.com/api/",
        "https://snip--ly.vercel.app/"
      )
    : "";

  return (

    <div className="relative overflow-hidden bg-white/70 backdrop-blur-2xl border border-white/60 rounded-[32px] shadow-[0_10px_50px_rgba(0,0,0,0.08)] p-6 sm:p-8 mb-8">

      {/* Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-300 opacity-10 rounded-full blur-3xl"></div>

      {/* Header */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

        <div>

          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">

            🔗 URL Generator

          </div>

          <h2 className="text-3xl font-black text-gray-900 tracking-tight">

            Create Short URL

          </h2>

          <p className="text-gray-500 mt-2 text-sm sm:text-base">

            Transform long URLs into elegant shareable links instantly.

          </p>

        </div>

        {/* Badge */}
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-5 py-3 rounded-2xl shadow-lg">

          <div className="text-xs opacity-80">
            Powered by
          </div>

          <div className="font-black text-lg">
            Sniply
          </div>

        </div>

      </div>

      {/* Inputs */}
      <div className="relative z-10 flex flex-col gap-5">

        {/* URL */}
        <div>

          <label className="block text-sm font-semibold text-gray-700 mb-2">

            Original URL

          </label>

          <input
            type="text"
            placeholder="https://example.com/very-long-link"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white/90 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm text-gray-700"
          />

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* Expiry */}
          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">

              Expiry Date

            </label>

            <input
              type="datetime-local"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white/90 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm text-gray-700"
            />

          </div>

          {/* Custom Code */}
          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">

              Custom Alias

            </label>

            <input
              type="text"
              placeholder="shivam"
              value={customCode}
              onChange={(e) => setCustomCode(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white/90 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm text-gray-700"
            />

          </div>

        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-2">

          <button
            onClick={handleShorten}
            className="flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-4 rounded-2xl font-bold shadow-xl hover:scale-[1.01] hover:shadow-2xl transition-all duration-300"
          >

            ✨ Generate Short URL

          </button>

          <button
            onClick={() => {

              if (!url) {
                return alert("Enter URL first");
              }

              setQrValue(url);

            }}
            className="flex-1 border border-purple-200 bg-white/70 text-purple-700 py-4 rounded-2xl font-bold hover:bg-purple-50 transition-all duration-300 shadow-sm"
          >

            📱 Generate QR

          </button>

        </div>

      </div>

      {/* Success Box */}
      {shortUrl && (

        <div className="relative z-10 mt-8 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-[28px] p-6 shadow-2xl overflow-hidden">

          {/* Glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">

            {/* Top */}
            <div className="flex items-center gap-3 mb-5">

              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl">

                ✅

              </div>

              <div>

                <div className="text-xl font-black">
                  Short URL Created
                </div>

                <div className="text-sm text-white/80">
                  Your link is ready to share
                </div>

              </div>

            </div>

            {/* URL */}
            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-5 break-all text-lg font-bold shadow-inner">

              {publicShortUrl}

            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 mt-5">

              <a
                href={publicShortUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center bg-white text-green-600 py-3 rounded-2xl font-bold hover:scale-[1.01] transition-all"
              >

                Open Link

              </a>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(publicShortUrl);
                  alert("Short URL copied");
                }}
                className="flex-1 bg-white/20 backdrop-blur-md text-white py-3 rounded-2xl font-bold hover:bg-white/30 transition-all"
              >

                Copy Link

              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default CreateUrlCard;