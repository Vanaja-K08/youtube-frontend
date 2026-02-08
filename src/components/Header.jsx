
import { useNavigate } from "react-router-dom";
import "../styles/header.css";
import { useEffect, useState } from "react";

export default function Header({ toggleSidebar }) {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
   useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    setUser(null);
    // navigate("/login");
  };

  return (
    <div className="header">
      <div className="header-left">
        <span
          className="menu-icon"
          onClick={toggleSidebar}
        >
          ☰
        </span>
        <span className="logo">YouTube</span>
      </div>

      <input className="search-box" placeholder="Search" />

      <div className="header-right">
        {/* {!user ? (
          <button
            className="signin-btn"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        ) : (
          <span className="user-name">{user.username.charAt(0).toUpperCase()}</span>
        )} */}

         {!user ? (
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
        ) : (
          <div className="user-wrapper">
            <div className="user-icon">
              {user.username.charAt(0).toUpperCase()}
            </div>

            {/* Hover Card */}
            <div className="user-hover">
              <p className="name">{user.username}</p>
              <p className="email">{user.email}</p>
              <button onClick={logout}>Logout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

