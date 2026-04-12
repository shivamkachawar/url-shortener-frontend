function UrlCard({ item, handleDelete, handleExtend, setQrValue }) {
  return (
    <div className="p-4 border rounded mb-3 flex justify-between">

      <div>
        <p className="font-medium">{item.originalUrl}</p>

        <a
          href={`http://localhost:8080/api/${item.shortCode}`}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 text-sm"
        >
          {item.shortCode}
        </a>

        <div className="text-xs text-gray-400">
          Created: {new Date(item.createdAt).toLocaleString()}
        </div>

        <div className="text-xs text-gray-500">
          Expires: {item.expiryDate
            ? new Date(item.expiryDate).toLocaleString()
            : "N/A"}
        </div>

        <div className="text-xs text-gray-400">
          Last Accessed: {item.lastAccessedAt
            ? new Date(item.lastAccessedAt).toLocaleString()
            : "Never"}
        </div>

        <div className="mt-2">
          <button onClick={() => handleDelete(item.id)} className="text-red-500 mr-3">
            Delete
          </button>

          <button onClick={() => handleExtend(item.id)} className="text-blue-500 mr-3">
            Extend
          </button>

          <button
            onClick={() =>
              setQrValue(`http://localhost:8080/api/${item.shortCode}`)
            }
            className="text-purple-500"
          >
            View QR
          </button>
        </div>
      </div>

      <div className="text-sm text-gray-600">
        Clicks: {item.clickCount}
      </div>

    </div>
  );
}

export default UrlCard;