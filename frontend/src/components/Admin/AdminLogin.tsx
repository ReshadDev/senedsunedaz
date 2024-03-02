import React, { useState } from "react";
import config from "../../config";
import axios, { AxiosResponse } from "axios";

import { useAuth } from "../../context/auth.jsx";

import { useNavigate } from "react-router-dom";

const AdminLogin: React.FC = () => {
  const apiUrl = config.apiURL;
  const [, setAuth] = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response: AxiosResponse<{ token: string }> = await axios.post(
        `${apiUrl}/auth/authenticate`,
        {
          email,
          password,
        }
      );

      const { token } = response.data;

      setAuth((prevAuth) => ({
        ...prevAuth,
        token,
      }));

      localStorage.setItem("auth", JSON.stringify({ user: null, token }));
      navigate("/admin");
      console.log("Login success");
    } catch (error) {
      // Handle login error
      console.error("Login error:", error);
    }
  };

  return (
    <div id="admin">
      <div className="login-container">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="exampleInputName"
              required
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="exampleInputPassword1"
              required
            />
          </label>
          <br />
          <button type="submit" className="btn btn-primary login-btn mb-3">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
