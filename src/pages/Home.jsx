// import { useState } from "react";
// import Header from "../components/Header";
// import Sidebar from "../components/Sidebar";
// import VideoCard from "../components/VideoCard";

// export default function Home() {
//   // 🔹 Search text
//   const [search, setSearch] = useState("");

//   // 🔹 Sample video data
//   const videos = [
//     {
//       id: 1,
//       title: "Learn React in 30 Minutes",
//       thumbnail: "https://via.placeholder.com/250x150",
//       channel: "Code with John",
//       views: 15200,
//       category: "React",
//     },
//     {
//       id: 2,
//       title: "Node.js Basics Tutorial",
//       thumbnail: "https://via.placeholder.com/250x150",
//       channel: "Backend Hub",
//       views: 9800,
//       category: "Node",
//     },
//     {
//       id: 3,
//       title: "MongoDB Crash Course",
//       thumbnail: "https://via.placeholder.com/250x150",
//       channel: "DB Master",
//       views: 7600,
//       category: "MongoDB",
//     },
//   ];

//   // 🔹 Filter videos by search
//   const filteredVideos = videos.filter((video) =>
//     video.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <>
//       {/* Header */}
//       <Header onSearch={setSearch} />

//       <div style={{ display: "flex" }}>
//         {/* Sidebar */}
//         <Sidebar />

//         {/* Video Grid */}
//         <div style={{ padding: "20px", width: "100%" }}>
//           <div
//             style={{
//               display: "flex",
//               flexWrap: "wrap",
//               gap: "20px",
//             }}
//           >
//             {filteredVideos.map((video) => (
//               <VideoCard key={video.id} video={video} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import { useEffect, useState } from "react";
import VideoCard from "../components/VideoCard";
import { authFetch } from "./../api/video";

export default function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/videos")
      .then(res => res.json())
      .then(setVideos);
  }, []);

  const deleteVideo = async (id) => {
    await authFetch(`/videos/${id}`, { method: "DELETE" });
    setVideos(videos.filter(v => v._id !== id));
  };

  return (
    <div className="video-grid">
      {videos.map(v => (
        <VideoCard key={v._id} video={v} onDelete={deleteVideo}/>
      ))}
    </div>
  );
}

