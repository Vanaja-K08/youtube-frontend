export default function Header({ onSearch }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px 20px",
        borderBottom: "1px solid #ddd",
        gap: "15px",
      }}
    >
      {/* Hamburger Menu */}
      <button style={{ fontSize: "18px" }}>☰</button>

      {/* Logo */}
      <h2 style={{ margin: 0 }}>YouTube</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => onSearch(e.target.value)}
        style={{
          flex: 1,
          padding: "8px",
          fontSize: "16px",
        }}
      />

      {/* Sign In Button */}
      <button
        style={{
          padding: "8px 12px",
          background: "red",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Sign In
      </button>
    </div>
  );
}
