
import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../styles/video.css";

export default function Home() {
  const [open, setOpen] = useState(false);

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
        {/* {videos.map((video) => (
          <VideoCard key={video.videoId} video={video} />
        ))} */}
      </div>
    </>
  );
}



