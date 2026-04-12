import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("token")
  );

  const [isLogin, setIsLogin] = useState(true);

  if (isLoggedIn) {
    return <Dashboard />;
  }

  return (
    <div className="min-h-screen bg-gray-100">

      {/* App Title */}
      <div className="text-center py-6">
        <h1 className="text-3xl font-bold">URL Shortener</h1>
      </div>

      {/* Auth Pages */}
      {isLogin
        ? <Login setIsLoggedIn={setIsLoggedIn} setIsLogin={setIsLogin} />
        : <Register setIsLogin={setIsLogin} />
      }

    </div>
  );
}

export default App;