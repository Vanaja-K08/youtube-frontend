import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";
import { loginUser } from "../api/auth";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [form, setForm] = useState({});

  const handleLogin = async () => {
     const res = await loginUser(form);
    localStorage.setItem("token", res.data.token);
    navigate("/");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="auth-input"
         onChange={e => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="auth-input"
           onChange={e => setForm({ ...form, password: e.target.value })}
        />

        <button className="auth-btn" onClick={handleLogin}>
          Login
        </button>

        <p className="auth-footer">
          New user?
          <span
            className="auth-link"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
