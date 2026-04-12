import { useState } from "react";
import { registerUser } from "../services/api";

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-6 rounded shadow-md w-80">

        <h2 className="text-xl font-bold mb-4 text-center">Register</h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full border p-2 mb-3 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-3 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Register
        </button>

        <p className="text-sm mt-3 text-center">
          Already have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => setIsLogin(true)}
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
}

export default Register;