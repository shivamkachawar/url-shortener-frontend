import { useEffect, useState } from "react";
import { getCurrentUser } from "./services/api";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (isLoggedIn) {
      getCurrentUser()
        .then((data) => {
          setUser(data);
        })
        .catch(() => {
          localStorage.removeItem("token");
          setIsLoggedIn(false);
        });
    }
  }, [isLoggedIn]);

  // 🔐 Not logged in
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-100">

        <div className="text-center py-6">
          <h1 className="text-3xl font-bold">URL Shortener</h1>
        </div>

        {isLogin
          ? <Login setIsLoggedIn={setIsLoggedIn} setIsLogin={setIsLogin} />
          : <Register setIsLogin={setIsLogin} />
        }

      </div>
    );
  }

  // ⏳ Loading user info
  if (!user) {
    return <div className="p-6">Loading...</div>;
  }

  // 👑 Admin
  if (user.role === "ROLE_ADMIN") {
    return <Admin />;
  }

  // 👤 Normal user
  return <Dashboard />;
}

export default App;