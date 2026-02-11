
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../styles/video.css";
import VideoCard from "../components/VideoCard";
import API from "../services/api";

export default function Home() {
  const [open, setOpen] = useState(false);

  const [videos, setVideos] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "React", "Node", "JavaScript"];

  useEffect(() => {
    API.get("/videos").then(res => setVideos(res.data));
  }, []);

  useEffect(() => {
    fetch(
      `http://localhost:5000/api/videos?search=${search}&category=${category}`
    )
      .then(res => res.json())
      .then(data => setVideos(data));
  }, [search, category]);

  return (
    <>
      <Header toggleSidebar={() => setOpen(!open)}
        setSearch={setSearch} />


      <Sidebar isOpen={open} />

      <div style={{ display: "flex", gap: "10px", margin: "10px 0" }}>
        {categories.map((cat) => (
          <button key={cat} onClick={() => setCategory(cat)}>
            {cat}
          </button>
        ))}
      </div>

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



