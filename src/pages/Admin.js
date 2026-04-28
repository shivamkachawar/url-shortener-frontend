import { useEffect, useState } from "react";
import { getAllUsers, getAllUrls, getAdminStats } from "../services/api";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function Admin() {

  const [users, setUsers] = useState([]);
  const [urls, setUrls] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userSearch, setUserSearch] = useState("");
  const [urlSearch, setUrlSearch] = useState("");
  const [stats, setStats] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const usersData = await getAllUsers();
      const urlsData = await getAllUrls();
      const statsData = await getAdminStats();

      setUsers(usersData);
      setUrls(urlsData);
      setStats(statsData);

    } catch (error) {
      console.error("Admin fetch failed", error);
      alert("Not authorized or error occurred");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-100 p-6">

  {/* HEADER */}
  <div className="flex justify-between items-center mb-8">
    <h2 className="text-2xl font-bold text-gray-800">
      Admin Dashboard
    </h2>

    <button
      onClick={handleLogout}
      className="px-4 py-2 rounded-lg border border-red-400 text-red-500 hover:bg-red-50 transition"
    >
      Logout
    </button>
  </div>

  {/* STATS */}
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">

    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-5 rounded-2xl shadow-lg">
      <p className="text-sm opacity-80">Total Users</p>
      <h2 className="text-2xl font-bold">{stats.totalUsers}</h2>
    </div>

    <div className="bg-white/80 backdrop-blur-md border border-gray-200 p-5 rounded-2xl shadow">
      <p className="text-sm text-gray-500">Total URLs</p>
      <h2 className="text-2xl font-bold text-gray-800">{stats.totalUrls}</h2>
    </div>

    <div className="bg-white/80 backdrop-blur-md border border-gray-200 p-5 rounded-2xl shadow">
      <p className="text-sm text-gray-500">Total Clicks</p>
      <h2 className="text-2xl font-bold text-gray-800">{stats.totalClicks || 0}</h2>
    </div>

  </div>

  {/* CHART */}
  <div className="bg-white/80 backdrop-blur-md border border-gray-200 p-6 rounded-2xl shadow mb-6">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">
      Top URL Clicks
    </h3>

    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={[...urls]
          .map(u => ({ ...u, clickCount: Math.floor(u.clickCount) }))
          .sort((a, b) => b.clickCount - a.clickCount)
          .slice(0, 5)
        }
      >
        <XAxis dataKey="shortCode" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="clickCount" />
      </BarChart>
    </ResponsiveContainer>
  </div>

  {/* MAIN GRID */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

    {/* USERS PANEL */}
    <div className="bg-white/80 backdrop-blur-md border border-gray-200 p-6 rounded-2xl shadow flex flex-col">

      <h3 className="text-lg font-semibold text-gray-800 mb-4">Users</h3>

      <input
        type="text"
        placeholder="Search users..."
        value={userSearch}
        onChange={(e) => setUserSearch(e.target.value)}
        className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 mb-4"
      />

      <div className="flex flex-col gap-2 max-h-[400px] overflow-y-auto pr-1">
        {users
          .filter((user) =>
            user.username.toLowerCase().includes(userSearch.toLowerCase())
          )
          .map((user) => (
            <div
              key={user.id}
              onClick={() => {
                setSelectedUser(user);
                setUrlSearch("");
              }}
              className={`px-3 py-2 rounded-lg cursor-pointer transition ${
                selectedUser?.id === user.id
                  ? "bg-indigo-100 text-indigo-700"
                  : "hover:bg-gray-100"
              }`}
            >
              {user.username}
              <span className="text-xs text-gray-400 ml-2">
                ({user.role})
              </span>
            </div>
          ))}
      </div>
    </div>

    {/* URL PANEL */}
    <div className="bg-white/80 backdrop-blur-md border border-gray-200 p-6 rounded-2xl shadow flex flex-col">

      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        {selectedUser
          ? `${selectedUser.username}'s URLs`
          : "Select a user"}
      </h3>

      {selectedUser && (
        <input
          type="text"
          placeholder="Search URLs..."
          value={urlSearch}
          onChange={(e) => setUrlSearch(e.target.value)}
          className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 mb-4"
        />
      )}

      <div className="flex flex-col gap-3 max-h-[400px] overflow-y-auto pr-1">

        {selectedUser ? (
          urls
            .filter((url) => url.user?.id === selectedUser.id)
            .filter((url) =>
              url.originalUrl.toLowerCase().includes(urlSearch.toLowerCase()) ||
              url.shortCode.toLowerCase().includes(urlSearch.toLowerCase())
            )
            .map((url) => (
              <div
                key={url.id}
                className="p-4 rounded-xl border border-gray-200 bg-white hover:shadow-md transition"
              >

                <p className="text-sm text-gray-500 truncate">
                  {url.originalUrl}
                </p>

                <a
                  href={`https://sniply-backend.onrender.com/api/${url.shortCode}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 font-semibold text-sm"
                >
                  {url.shortCode}
                </a>

                <div className="text-xs text-gray-400 mt-2">
                  Created: {new Date(url.createdAt).toLocaleString()}
                </div>

                <div className="text-xs text-gray-500">
                  Expires: {url.expiryDate
                    ? new Date(url.expiryDate).toLocaleString()
                    : "N/A"}
                </div>

                <div className="text-xs text-gray-400">
                  Last Accessed: {url.lastAccessedAt
                    ? new Date(url.lastAccessedAt).toLocaleString()
                    : "Never"}
                </div>

                <div className="flex justify-between items-center mt-3">

                  <span className="text-sm text-indigo-600 font-semibold">
                    {url.clickCount} clicks
                  </span>

                  <button
                    onClick={async () => {
                      const token = localStorage.getItem("token");

                      try {
                        await fetch(`https://sniply-backend.onrender.com/admin/url/${url.id}`, {
                          method: "DELETE",
                          headers: {
                            Authorization: "Bearer " + token,
                          },
                        });

                        alert("Deleted successfully");
                        fetchData();

                      } catch (err) {
                        alert("Delete failed");
                      }
                    }}
                    className="text-red-500 text-sm hover:underline"
                  >
                    Delete
                  </button>

                </div>
              </div>
            ))
        ) : (
          <p className="text-gray-400 text-center mt-10">
            Select a user to view URLs
          </p>
        )}

      </div>
    </div>

  </div>

</div>
  );
}

export default Admin;