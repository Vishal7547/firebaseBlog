import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { handleLoginAuth, authentication } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };
    handleLoginAuth(data);
    console.log("login", authentication);
    navigate("/");
    // if (authentication) return navigate("/");
  };
  return (
    <div className="container">
      <h1>Login</h1>
      <form>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
