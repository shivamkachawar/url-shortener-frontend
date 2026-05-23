import { useEffect, useState } from "react";
import { getAllUsers, getAllUrls, getAdminStats } from "../services/api";
import AdminHeader from "../components/admin/AdminHeader";
import StatsCards from "../components/admin/StatsCards";
import AnalyticsChart from "../components/admin/AnalyticsChart";
import UsersPanel from "../components/admin/UsersPanel";
import UrlsPanel from "../components/admin/UrlsPanel";

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

  <AdminHeader handleLogout={handleLogout} />

  <StatsCards stats={stats} />

  <AnalyticsChart urls={urls} />

  {/* MAIN GRID */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

  <UsersPanel
  users={users}
  selectedUser={selectedUser}
  setSelectedUser={setSelectedUser}
  userSearch={userSearch}
  setUserSearch={setUserSearch}
  setUrlSearch={setUrlSearch}
/>

<UrlsPanel
  selectedUser={selectedUser}
  urls={urls}
  urlSearch={urlSearch}
  setUrlSearch={setUrlSearch}
  fetchData={fetchData}
/>

  </div>

</div>
  );
}

export default Admin;