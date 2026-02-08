
import "../styles/video.css";
import { useNavigate } from "react-router-dom";

export default function VideoCard({ video }) {

  const navigate = useNavigate();

  return (
    <div className="video-card">
     
      <img
        src={video.thumbnailUrl}
        alt={video.title}
        className="thumbnail"
         onClick={() => navigate(`/video/${video.videoId}`)}
      />

      <div className="video-info">
        <h4 className="video-title">{video.title}</h4>
        <p className="channel-name">{video.channelName}</p>
        <p className="views">{video.views} views</p>
      </div>
    </div>
  );
}




