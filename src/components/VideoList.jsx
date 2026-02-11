import { useEffect, useState } from "react";

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/videos/my", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(data => setVideos(data));
  }, []);

  return (
    <div>
      <h3>My Videos</h3>
      {videos.map(v => (
        <div key={v._id}>
          <img src={v.thumbnailUrl} width="200" />
          <p>{v.title}</p>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
