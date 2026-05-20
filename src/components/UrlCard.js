function UrlCard({ item, handleDelete, handleExtend, setQrValue, setOriginalUrl }) {

  const shortUrl = `https://snip--ly.vercel.app/${item.shortCode}`;

  return (
    <div className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow-md p-5 mb-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">

        {/* LEFT SIDE */}
        <div className="flex-1 min-w-0">

          {/* Original URL */}
          <p className="text-sm text-gray-500 truncate">
            {item.originalUrl}
          </p>

          {/* Full Short URL */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2">

            <a
              href={shortUrl}
              target="_blank"
              rel="noreferrer"
              className="text-lg font-semibold text-indigo-600 hover:text-purple-600 hover:underline break-all transition"
            >
              {shortUrl}
            </a>

            <button
              onClick={() => {
                navigator.clipboard.writeText(shortUrl);
                alert("Short URL copied");
              }}
              className="px-3 py-1 text-xs font-medium rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition w-fit"
            >
              Copy
            </button>

          </div>

          {/* Metadata */}
          <div className="mt-3 text-xs text-gray-400 space-y-1">

            <div>
              Created: {new Date(item.createdAt).toLocaleString()}
            </div>

            <div>
              Expires:{" "}
              {item.expiryDate
                ? new Date(item.expiryDate).toLocaleString()
                : "N/A"}
            </div>

            <div>
              Last Accessed:{" "}
              {item.lastAccessedAt
                ? new Date(item.lastAccessedAt).toLocaleString()
                : "Never"}
            </div>

          </div>

          {/* Actions */}
          <div className="mt-4 flex flex-wrap gap-2">

            <button
              onClick={() => handleDelete(item.id)}
              className="px-3 py-1 text-sm rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition"
            >
              Delete
            </button>

            <button
              onClick={() => handleExtend(item.id, item.expiryDate)}
              className="px-3 py-1 text-sm rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition"
            >
              Extend
            </button>

            <button
              onClick={() => {
                setQrValue(shortUrl);
                setOriginalUrl(item.originalUrl);
            }}
              className="px-3 py-1 text-sm rounded-lg bg-purple-50 text-purple-600 hover:bg-purple-100 transition"
            >
              QR
            </button>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex md:flex-col items-center md:items-end justify-between md:justify-start gap-2">

          <div className="text-xs uppercase tracking-wide text-gray-400">
            Clicks
          </div>

          <div className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold text-sm shadow">
            {item.clickCount}
          </div>

        </div>

      </div>
    </div>
  );
}

export default UrlCard;