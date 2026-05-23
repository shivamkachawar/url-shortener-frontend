import { useState } from "react";
import { loginUser } from "../services/api";
import LoginForm from "../components/LoginForm";

function Login({ setIsLoggedIn, setIsLogin }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // ✅ loading state
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {

    try {

      setLoading(true);

      const data = await loginUser(username, password);

      if (data.token) {

        localStorage.setItem("token", data.token);
        setIsLoggedIn(true);

      } else {

        alert(data.error || "Login failed");

      }

    } catch (error) {

      console.error(error);
      alert("Something went wrong");

    } finally {

      setLoading(false);

    }
  };

  return (
    <LoginForm
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      handleLogin={handleLogin}
      setIsLogin={setIsLogin}

      // ✅ pass loading
      loading={loading}
    />
  );
}

export default Login;