import { useState } from "react";
import { registerUser } from "../services/api";
import RegisterForm from "../components/RegisterForm";

function Register({ setIsLogin }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
  try {
    const data = await registerUser(username, password);

    console.log("REGISTER RESPONSE:", data); // 👈 ADD THIS

    if (!data.error) {
      alert("Registration successful");
      setIsLogin(true);
    } else {
      alert(data.error || "Registration failed");
    }

  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  }
};

  return (
  <RegisterForm
    username={username}
    setUsername={setUsername}
    password={password}
    setPassword={setPassword}
    handleRegister={handleRegister}
    setIsLogin={setIsLogin}
  />
);
}

export default Register;