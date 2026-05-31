import { useState } from "react";
import { registerUser } from "../services/api";
import RegisterForm from "../components/RegisterForm";

function Register({ setIsLogin }) {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ Loading state
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {

    try {

      setLoading(true);

      const data = await registerUser(username, email, password);

      console.log("REGISTER RESPONSE:", data);

      if (!data.error) {

        alert("Registration successful");
        setIsLogin(true);

      } else {

        alert(data.error || "Registration failed");

      }

    } catch (error) {

      console.error(error);
      alert("Something went wrong");

    } finally {

      setLoading(false);

    }
  };

  return (

    <RegisterForm
      username={username}
      setUsername={setUsername}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleRegister={handleRegister}
      setIsLogin={setIsLogin}
      loading={loading}
    />

  );
}

export default Register;