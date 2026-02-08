
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../styles/video.css";
import VideoCard from "../components/VideoCard";
// import videos from "../data/videos";
import API from "../services/api";

export default function Home() {
  const [open, setOpen] = useState(false);

  const [videos, setVideos] = useState([]);

   useEffect(() => {
    API.get("/videos").then(res => setVideos(res.data));
  }, []);

  return (
    <>
      <Header toggleSidebar={() => setOpen(!open)} />
      <Sidebar isOpen={open} />

      <div
        className="video-grid"
        style={{
          marginLeft: open ? "220px" : "0",
          padding: "16px"
        }}
      >
        {videos.map((video) => (
          <VideoCard key={video.videoId} video={video} />
        ))}
      </div>
    </>
  );
}



