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

  const oauthToken =
  new URLSearchParams(
    window.location.search
  ).get("oauthToken");

if (oauthToken) {

  localStorage.setItem(
    "token",
    oauthToken
  );

  window.history.replaceState(
    {},
    document.title,
    "/"
  );

  window.location.reload();
}

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
  className="hidden sm:flex absolute top-6 left-6 z-50 items-center gap-2 text-gray-500 hover:text-indigo-600"
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