function UrlCard({ item, handleDelete, handleExtend, setQrValue }) {
  return (
    <div className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow-md p-5 mb-4 hover:shadow-lg transition-all">

      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">

        {/* 🔗 LEFT SIDE */}
        <div className="flex-1">

          {/* Original URL */}
          <p className="text-sm text-gray-500 truncate">
            {item.originalUrl}
          </p>

          {/* Short URL */}
          <a
            href={`http://localhost:8080/api/${item.shortCode}`}
            target="_blank"
            rel="noreferrer"
            className="text-lg font-semibold text-indigo-600 hover:underline break-all"
          >
            {item.shortCode}
          </a>

          {/* Metadata */}
          <div className="mt-2 text-xs text-gray-400 space-y-1">
            <div>Created: {new Date(item.createdAt).toLocaleString()}</div>
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
              className="px-3 py-1 text-sm rounded-md bg-red-50 text-red-600 hover:bg-red-100 transition"
            >
              Delete
            </button>

            <button
              onClick={() => handleExtend(item.id)}
              className="px-3 py-1 text-sm rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 transition"
            >
              Extend
            </button>

            <button
              onClick={() => {
                setQrValue(`http://localhost:8080/api/${item.shortCode}`);
                setTimeout(() => {
                  const qrSection = document.getElementById("qr-section");
                  if (qrSection) {
                    qrSection.scrollIntoView({ behavior: "smooth", block: "center" });
                  }
                }, 100);
              }}
              className="px-3 py-1 text-sm rounded-md bg-purple-50 text-purple-600 hover:bg-purple-100 transition"
            >
              QR
            </button>

          </div>
        </div>

        {/* 📊 RIGHT SIDE */}
        <div className="flex md:flex-col items-center md:items-end justify-between md:justify-start gap-2">

          <div className="text-xs text-gray-400">Clicks</div>

          <div className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 font-semibold text-sm">
            {item.clickCount}
          </div>

        </div>

      </div>
    </div>
  );
}

export default UrlCard;