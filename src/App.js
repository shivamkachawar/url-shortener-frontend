import { useEffect, useState } from "react";
import { getCurrentUser } from "./services/api";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(null);
  const [showHome, setShowHome] = useState(true);

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

  // HOME PAGE
  if (showHome) {

    return (
      <Home
        onLogin={() => {
          setShowHome(false);
          setIsLogin(true);
        }}
        onRegister={() => {
          setShowHome(false);
          setIsLogin(false);
        }}
      />
    );
  }

  // LOGIN / REGISTER
  return (

    <div className="min-h-screen bg-gray-100">

      <div className="text-center py-6">

        <button
          onClick={() => setShowHome(true)}
          className="text-indigo-600 hover:underline text-sm mb-4"
        >
          ← Back to Home
        </button>

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
    return <div className="p-6">Loading... It may take a minute as the project is using a free tier hosting service.</div>;
  }

  // 👑 Admin
  if (user.role === "ROLE_ADMIN") {
    return <Admin />;
  }

  // 👤 Normal user
  return <Dashboard />;
}

export default App;