import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import Comments from "../components/Comments";

const VideoPlayer = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    API.get(`/videos/${id}`).then(res => setVideo(res.data));
    API.get(`/comments/${id}`).then(res => setComments(res.data));
  }, [id]);



  const handleLike = async () => {
  const res = await fetch(
    `http://localhost:5000/api/videos/like/${video._id}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  const data = await res.json();
  setVideo(data);
};

const handleDislike = async () => {
  const res = await fetch(
    `http://localhost:5000/api/videos/dislike/${video._id}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  const data = await res.json();
  setVideo(data);
};

  if (!video) return <p>Loading...</p>;

  return (
    <div className="player-page">
      <video src={video.videoUrl} controls width="100%" />

      <h2>{video.title}</h2>
      <p>{video.description}</p>
      <p><b>{video.channel?.name}</b></p>

      <div style={{ display: "flex", gap: "20px", margin: "10px 0" }}>
  <button onClick={handleLike}>
    👍 {video.likes.length}
  </button>

  <button onClick={handleDislike}>
    👎 {video.dislikes.length}
  </button>
</div>

      <div className="comments">
      <Comments videoId={video._id} />

        
      </div>
    </div>
  );
};

export default VideoPlayer;
