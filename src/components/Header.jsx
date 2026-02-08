
import { useNavigate } from "react-router-dom";
import "../styles/header.css";

export default function Header({ toggleSidebar }) {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

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
        {!user ? (
          <button
            className="signin-btn"
            onClick={() => navigate("/login")}
          >
            Sign In
          </button>
        ) : (
          <span className="user-name">{user}</span>
        )}
      </div>
    </div>
  );
}

