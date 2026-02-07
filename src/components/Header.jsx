import { useNavigate } from "react-router-dom";

export default function Header({ onSearch }) {

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px 20px",
        borderBottom: "1px solid #ddd",
        gap: "15px",
        position: "sticky",
        top: 0,
        background: "white",
        zIndex: 10,
      }}
    >
      <button style={{ fontSize: "20px", background: "none", border: "none" }}>
        ☰
      </button>

      <h2 style={{ margin: 0, color: "red" }}>YouTube</h2>

      <input
        placeholder="Search"
        onChange={(e) => onSearch(e.target.value)}
        style={{
          flex: 1,
          padding: "8px 12px",
          fontSize: "16px",
          borderRadius: "20px",
          border: "1px solid #ccc",
        }}
      />

      {user ? (
        <span className="font-semibold">{user.name}</span>
      ) : (
        <button
          onClick={() => navigate("/login")}
        style={{
          padding: "8px 14px",
          background: "red",
          color: "white",
          border: "none",
          borderRadius: "20px",
          cursor: "pointer",
        }}
      >
        Sign In
      </button>
      )}
    </div>
  );
}
