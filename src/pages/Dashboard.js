import { useState, useEffect } from "react";
import { createShortUrl, getMyUrls, deleteUrl, updateExpiry, getCurrentUser } from "../services/api";

import Header from "../components/Header";
import CreateUrlCard from "../components/CreateUrlCard";
import QRViewer from "../components/QRViewer";
import UrlList from "../components/UrlList";

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

    getCurrentUser().then((data) => {
        setUsername(data.username);  // 🔥 FIX
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

    <Header username={username} handleLogout={handleLogout} />

    <CreateUrlCard
      url={url}
      setUrl={setUrl}
      expiry={expiry}
      setExpiry={setExpiry}
      customCode={customCode}
      setCustomCode={setCustomCode}
      handleShorten={handleShorten}
      setQrValue={setQrValue}
      shortUrl={shortUrl}
    />

    <QRViewer qrValue={qrValue} setQrValue={setQrValue} />

    <input
      type="text"
      placeholder="Search URLs..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border p-2 rounded mb-4 w-full"
    />

    <UrlList
      filteredUrls={filteredUrls}
      handleDelete={handleDelete}
      handleExtend={handleExtend}
      setQrValue={setQrValue}
    />

  </div>
);
}

export default Dashboard;