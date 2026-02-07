import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";
import { registerUser } from "../api/auth";

export default function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [form, setForm] = useState({});

  const handleSignup = async () => {
  
     await registerUser(form);
    alert("Registration successful");
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Sign Up</h2>

        <input
          placeholder="Username"
          className="auth-input"
         onChange={e => setForm({ ...form, username: e.target.value })}
        />

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

        <button className="auth-btn" onClick={handleSignup}>
          Register
        </button>

        <p className="auth-footer">
          Already have an account?
          <span
            className="auth-link"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
