import { useState, useEffect } from "react";
import { createShortUrl, getMyUrls, deleteUrl, updateExpiry } from "../services/api";

function Dashboard() {

  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [urls, setUrls] = useState([]);
  const [expiry, setExpiry] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchUrls();
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
    const data = await createShortUrl(url, expiry);

    console.log("CREATE RESPONSE:", data); // keep for debug

    // ✅ FIXED CONDITION
    if (data && data.shortCode) {

      const fullUrl = `http://localhost:8080/api/${data.shortCode}`;

      setShortUrl(fullUrl);
      setUrl("");
      setExpiry("");

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
    const confirmDelete = window.confirm("Are you sure you want to delete this URL?");
    if (!confirmDelete) return;

    try {
      await deleteUrl(id);
      fetchUrls();
    } catch (error) {
      console.error(error);
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
      console.error(error);
      alert("Update failed");
    }
  };

  // 🔥 FILTER LOGIC (IMPORTANT)
  const filteredUrls = urls.filter((item) =>
    item.originalUrl.toLowerCase().includes(search.toLowerCase()) ||
    item.shortCode.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">URL Shortener</h2>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Create URL Card */}
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

          <p className="text-sm text-gray-600">
            Expiry (default: 7 days)
          </p>

          <input
            type="datetime-local"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            className="border p-2 rounded"
          />

          <button
            onClick={handleShorten}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Shorten
          </button>

        </div>

        {shortUrl && (
  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded">

    <p className="font-medium text-green-700 mb-2">
      ✅ Short URL created
    </p>

    <div className="flex items-center justify-between gap-2">

      <a
        href={shortUrl}
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 underline break-all"
      >
        {shortUrl}
      </a>

      <button
        onClick={() => {
          navigator.clipboard.writeText(shortUrl);
          alert("Copied to clipboard!");
        }}
        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
      >
        Copy
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

      {/* URLs List */}
      <div className="bg-white p-6 rounded shadow-md">
        <h3 className="text-lg font-semibold mb-4">Your URLs</h3>

        <div className="space-y-4">

          {filteredUrls.length === 0 ? (

            <p className="text-gray-400 text-center mt-4">
              No URLs found 😕
            </p>

          ) : (

            filteredUrls.map((item) => (
              <div
                key={item.id}
                className="p-4 border rounded flex justify-between items-center"
              >
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

                  <div className="mt-2">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-500 mr-3"
                    >
                      Delete
                    </button>

                    <button
                      onClick={() => handleExtend(item.id)}
                      className="text-blue-500"
                    >
                      Extend
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

    </div>
  );
}

export default Dashboard;