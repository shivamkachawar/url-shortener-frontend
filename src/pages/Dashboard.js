import { useState, useEffect } from "react";

import {
  createShortUrl,
  getMyUrls,
  deleteUrl,
  updateExpiry,
  getCurrentUser
} from "../services/api";

import Header from "../components/Header";
import CreateUrlCard from "../components/CreateUrlCard";
import QRViewer from "../components/QRViewer";
import UrlList from "../components/UrlList";
import ExtendExpiryModal from "../components/ExtendExpiryModal";

function Dashboard() {

  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [urls, setUrls] = useState([]);
  const [expiry, setExpiry] = useState("");
  const [search, setSearch] = useState("");
  const [customCode, setCustomCode] = useState("");
  const [username, setUsername] = useState("");
  const [deleteId, setDeleteId] = useState(null);
  const [toast, setToast] = useState("");
  

  // QR states
  const [qrValue, setQrValue] = useState("");
  const [originalUrl, setOriginalUrl] = useState("");

  // Extend modal states
  const [showExtendModal, setShowExtendModal] = useState(false);
  const [selectedUrlId, setSelectedUrlId] = useState(null);
  const [newExpiry, setNewExpiry] = useState("");

  useEffect(() => {
    fetchUrls();

    getCurrentUser().then((data) => {
      setUsername(data.username);
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

      const data = await createShortUrl(
        url,
        expiry,
        customCode
      );

      if (data && data.shortCode) {

        const fullUrl =
          `https://snip--ly.vercel.app/${data.shortCode}`;

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

    try {
  
      await deleteUrl(id);
  
      fetchUrls();
  
      setToast("✅ URL deleted");
  
      setTimeout(() => setToast(""), 2000);
  
    } catch {
  
      setToast("❌ Delete failed");
  
      setTimeout(() => setToast(""), 2000);
    }
  
    setDeleteId(null);
  };

  // OPEN MODAL
  const handleExtend = (id, expiryDate) => {

  setSelectedUrlId(id);

  if (expiryDate) {

    const formatted =
      new Date(expiryDate)
        .toISOString()
        .slice(0, 16);

    setNewExpiry(formatted);

  } else {

    const now =
      new Date()
        .toISOString()
        .slice(0, 16);

    setNewExpiry(now);
  }

  setShowExtendModal(true);
};

  // SAVE NEW EXPIRY
  const submitExtend = async () => {

    if (!newExpiry) {
      return alert("Please select expiry");
    }

    try {

      await updateExpiry(
        selectedUrlId,
        newExpiry
      );

      setShowExtendModal(false);
      setSelectedUrlId(null);
      setNewExpiry("");

      fetchUrls();

    } catch (error) {
      alert("Update failed");
    }
  };

  const filteredUrls = urls.filter((item) =>
    item.originalUrl
      .toLowerCase()
      .includes(search.toLowerCase()) ||

    item.shortCode
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (

    <div className="min-h-screen bg-gray-100 p-6">
      {toast && (
  <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[9999] px-5 py-3 rounded-2xl bg-gray-900 text-white shadow-2xl font-semibold">
    {toast}
  </div>
)}

{deleteId && (

<div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999]">

  <div className="bg-white rounded-3xl p-6 w-[90%] max-w-md shadow-2xl">

    <h2 className="text-xl font-bold text-gray-900">
      Delete URL?
    </h2>

    <p className="mt-2 text-gray-500">
      This action cannot be undone.
    </p>

    <div className="flex gap-3 mt-6">

      <button
        onClick={() => setDeleteId(null)}
        className="flex-1 py-3 rounded-2xl border border-gray-200"
      >
        Cancel
      </button>

      <button
        onClick={() => handleDelete(deleteId)}
        className="flex-1 py-3 rounded-2xl bg-red-500 text-white font-semibold"
      >
        Delete
      </button>

    </div>

  </div>

</div>

)}
      <Header
        username={username}
        handleLogout={handleLogout}
      />

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

      <QRViewer
        qrValue={qrValue}
        originalUrl={originalUrl}
        setQrValue={setQrValue}
      />

      <ExtendExpiryModal
        show={showExtendModal}
        onClose={() => {

          setShowExtendModal(false);

          setNewExpiry("");

          setSelectedUrlId(null);
        }}
        onSave={submitExtend}
        newExpiry={newExpiry}
        setNewExpiry={setNewExpiry}
      />

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
        setDeleteId={setDeleteId}
        setQrValue={setQrValue}
        setOriginalUrl={setOriginalUrl}
      />

    </div>
  );
}

export default Dashboard;