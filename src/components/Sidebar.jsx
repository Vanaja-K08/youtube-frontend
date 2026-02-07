export default function Sidebar() {
  return (
    <div
      style={{
        width: "200px",
        padding: "20px",
        borderRight: "1px solid #ddd",
        minHeight: "100vh",
        backgroundColor: "#fafafa",
      }}
    >
      <h3 style={{ marginBottom: "20px" }}>Menu</h3>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={itemStyle}>🏠 Home</li>
        <li style={itemStyle}>🔥 Trending</li>
        <li style={itemStyle}>📺 Subscriptions</li>
        <li style={itemStyle}>📚 Library</li>
      </ul>
    </div>
  );
}

const itemStyle = {
  padding: "10px",
  cursor: "pointer",
  borderRadius: "6px",
  marginBottom: "8px",
};
