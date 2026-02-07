import { useNavigate } from "react-router-dom";

export default function VideoCard({ video }) {
    const navigate = useNavigate();

  return (
    <div
    onClick={() => navigate(`/video/${video.id}`)}
      style={{
        width: "250px",
        cursor: "pointer",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src={video.thumbnail}
        alt={video.title}
        style={{
          width: "100%",
          borderRadius: "10px",
        }}
      />

      <div style={{ marginTop: "10px" }}>
        <h4 style={{ margin: "0 0 5px 0" }}>{video.title}</h4>

        <p style={{ margin: "0", color: "gray" }}>
          {video.channel}
        </p>

        <p style={{ margin: "0", fontSize: "14px", color: "gray" }}>
          {video.views} views
        </p>
      </div>
    </div>
  );
}
