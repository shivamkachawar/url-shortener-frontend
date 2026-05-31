import { useEffect, useState } from "react";
import { getCurrentUser } from "./services/api";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import LoadingScreen from "./components/LoadingScreen";
import ExpiredPage from "./pages/ExpiredPage";

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

  if (window.location.pathname === "/expired") {
    return <ExpiredPage />;
  }

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

<button
onClick={() => setShowHome(true)}
className="absolute top-3 left-3 sm:top-6 sm:left-6 z-50 text-indigo-600 hover:text-purple-600 transition text-xs sm:text-sm font-semibold flex items-center gap-1"
>
← Back to Home
</button>


      {isLogin
        ? <Login setIsLoggedIn={setIsLoggedIn} setIsLogin={setIsLogin} />
        : <Register setIsLogin={setIsLogin} />
      }

    </div>
  );
}

  // ⏳ Loading user info
  if (!user) {
    return <LoadingScreen />;
  }

  // 👑 Admin
  if (user.role === "ROLE_ADMIN") {
    return <Admin />;
  }

  // 👤 Normal user
  return <Dashboard />;
}

export default App;