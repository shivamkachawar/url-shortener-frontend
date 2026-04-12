import { useState, useEffect } from "react";
import { createShortUrl, getMyUrls, deleteUrl, updateExpiry, getCurrentUser } from "../services/api";
import { QRCodeCanvas } from "qrcode.react";

function Dashboard() {

  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [urls, setUrls] = useState([]);
  const [expiry, setExpiry] = useState("");
  const [search, setSearch] = useState("");
  const [customCode, setCustomCode] = useState("");
  const [username, setUsername] = useState("");
  const [qrValue, setQrValue] = useState("");

  useEffect(() => {
    fetchUrls();

    getCurrentUser().then((name) => {
      setUsername(name);
    });
  }, []);

  const fetchUrls = async () => {
    try {
      const data = await getMyUrls();
      setUrls(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleShorten = async () => {
    try {
      const data = await createShortUrl(url, expiry, customCode);

      if (data && data.shortCode) {
        const fullUrl = `http://localhost:8080/api/${data.shortCode}`;
        setShortUrl(fullUrl);
        setUrl("");
        setExpiry("");
        setCustomCode("");
        fetchUrls();
      } else {
        alert(data?.error || "Error creating short URL");
      }

    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this URL?")) return;

    try {
      await deleteUrl(id);
      fetchUrls();
    } catch (error) {
      alert("Delete failed");
    }
  };

  const handleExtend = async (id) => {
    const newExpiry = prompt("Enter new expiry (YYYY-MM-DDTHH:MM)");
    if (!newExpiry) return;

    try {
      await updateExpiry(id, newExpiry);
      fetchUrls();
    } catch (error) {
      alert("Update failed");
    }
  };

  const filteredUrls = urls.filter((item) =>
    item.originalUrl.toLowerCase().includes(search.toLowerCase()) ||
    item.shortCode.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">URL Shortener</h2>
          <p className="text-sm text-gray-500">
            Welcome, {username} 👋
          </p>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* Create URL */}
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

          {/* Buttons */}
          <div className="flex gap-2 w-full">
            <button
              onClick={handleShorten}
              className="w-1/2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-semibold"
            >
              Shorten URL
            </button>

            <button
              onClick={() => {
                if (!url) return alert("Enter URL first");
                setQrValue(url);
              }}
              className="w-1/2 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 font-semibold"
            >
              Generate QR
            </button>
          </div>
        </div>

        {/* Short URL */}
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

        {/* QR Viewer */}
        {qrValue && (
  <div className="mt-6 bg-gray-50 p-6 rounded border flex flex-col items-center">

    <p className="text-sm text-gray-600 mb-2">
      QR for:
    </p>

    <p className="text-blue-600 break-all mb-3">
      {qrValue}
    </p>

    <QRCodeCanvas id="qrCanvas" value={qrValue} size={150} />

    <br />

    <div className="flex justify-center gap-3 mt-3">

  <button
    onClick={() => {
      const canvas = document.getElementById("qrCanvas");
      const url = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = url;
      link.download = "qr-code.png";
      link.click();
    }}
    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
  >
    Download QR
  </button>

  <button
    onClick={() => setQrValue("")}
    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
  >
    Close
  </button>

</div>

  </div>
)}
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search URLs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded mb-4 w-full"
      />

      {/* URL List */}
      <div className="bg-white p-6 rounded shadow-md">
        <h3 className="text-lg font-semibold mb-4">Your URLs</h3>

        {filteredUrls.length === 0 ? (
          <p className="text-gray-400 text-center">No URLs found 😕</p>
        ) : (
          filteredUrls.map((item) => (
            <div key={item.id} className="p-4 border rounded mb-3 flex justify-between">

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
          ))
        )}
      </div>

    </div>
  );
}

export default Dashboard;