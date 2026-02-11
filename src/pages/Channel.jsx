import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/Channel.css";

export default function ViewChannel() {
  const { id } = useParams();
  const [channel, setChannel] = useState(null);
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

   const channelId = localStorage.getItem("channelId");

  useEffect(() => {
    fetch(`http://localhost:5000/api/channel/${channelId}`)
      .then(res => res.json())
      .then(data => {
        setChannel(data.channel);
        setVideos(data.videos);
      });
  }, [channelId]);

  if (!channel) return <h2>Loading...</h2>;

  return (
    <div className="view-channel">

      {/* HEADER */}
      <div className="channel-banner">
        <h1>{channel.name}</h1>
        <p>{channel.description}</p>
      </div>

      {/* VIDEOS */}
      <div className="video-grid">
        {videos.map(v => (
          <div
            key={v._id}
            className="video-card"
            onClick={() => navigate(`/video/${v._id}`)}
          >
            <img src={v.thumbnailUrl} alt="" />
            <h4>{v.title}</h4>
          </div>
        ))}
      </div>

    </div>
  );
}
