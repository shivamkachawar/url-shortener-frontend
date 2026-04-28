function CreateUrlCard({
  url, setUrl,
  expiry, setExpiry,
  customCode, setCustomCode,
  handleShorten,
  setQrValue,
  shortUrl
}) {
  return (
    <div className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg p-6 mb-6">

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Create Short URL
      </h3>

      <div className="flex flex-col gap-4">

        {/* URL Input */}
        <input
          type="text"
          placeholder="Paste your long URL here..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/80"
        />

        {/* Expiry */}
        <input
          type="datetime-local"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/80"
        />

        {/* Custom Code */}
        <input
          type="text"
          placeholder="Custom short code (optional)"
          value={customCode}
          onChange={(e) => setCustomCode(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/80"
        />

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">

          <button
            onClick={handleShorten}
            className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition shadow-md"
          >
            Shorten URL
          </button>

          <button
            onClick={() => {
              if (!url) return alert("Enter URL first");
              setQrValue(url);
            }}
            className="flex-1 border border-purple-400 text-purple-600 py-2 rounded-lg font-semibold hover:bg-purple-50 transition"
          >
            Generate QR
          </button>

        </div>
      </div>

      {/* Success Box */}
      {shortUrl && (
        <div className="mt-5 p-4 rounded-xl bg-green-50 border border-green-200">

          <p className="text-green-700 font-medium mb-2">
            Short URL created
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">

            <a
              href={shortUrl}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-600 underline break-all"
            >
              {shortUrl}
            </a>

            <button
              onClick={() => {
                navigator.clipboard.writeText(shortUrl);
                alert("Copied!");
              }}
              className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition"
            >
              Copy
            </button>

          </div>
        </div>
      )}

    </div>
  );
}

export default CreateUrlCard;