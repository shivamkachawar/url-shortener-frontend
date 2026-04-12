function CreateUrlCard({
  url, setUrl,
  expiry, setExpiry,
  customCode, setCustomCode,
  handleShorten,
  setQrValue,
  shortUrl
}) {
  return (
    <div className="bg-white p-6 rounded shadow-md mb-6">

      <h3 className="text-lg font-semibold mb-4">Create Short URL</h3>

      <div className="flex flex-col gap-3">

        <input
          type="text"
          placeholder="Enter URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="datetime-local"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Custom tag (optional)"
          value={customCode}
          onChange={(e) => setCustomCode(e.target.value)}
          className="border p-2 rounded"
        />

        <div className="flex gap-2 w-full">
          <button
            onClick={handleShorten}
            className="w-1/2 bg-blue-500 text-white px-4 py-2 rounded font-semibold"
          >
            Shorten URL
          </button>

          <button
            onClick={() => {
              if (!url) return alert("Enter URL first");
              setQrValue(url);
            }}
            className="w-1/2 bg-purple-500 text-white px-4 py-2 rounded font-semibold"
          >
            Generate QR
          </button>
        </div>
      </div>

      {shortUrl && (
        <div className="mt-4 p-4 bg-green-50 border rounded">
          <p className="text-green-700 font-medium">✅ Short URL created</p>

          <div className="flex justify-between items-center mt-2">
            <a href={shortUrl} target="_blank" rel="noreferrer" className="text-blue-600 underline">
              {shortUrl}
            </a>

            <button
              onClick={() => {
                navigator.clipboard.writeText(shortUrl);
                alert("Copied!");
              }}
              className="bg-green-500 text-white px-3 py-1 rounded"
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