
// import CreateVideoForm from "../components/CreateVideoForm";
// import VideoList from "../components/VideoList";

// const Channel = () => {
//   return (
//     <div>
//       <h2>My Channel</h2>
//       <CreateVideoForm />
//       <VideoList />
//     </div>
//   );
// };

// export default Channel;

import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Channel.css";

const Channel = () => {
  const [videos, setVideos] = useState([]);
  const [form, setForm] = useState({
    title: "",
    videoUrl: "",
    thumbnailUrl: "",
    category: ""
  });

  const token = localStorage.getItem("token");

  const fetchVideos = async () => {
    const res = await axios.get("http://localhost:5000/api/videos/my", {
      headers: { Authorization: `Bearer ${token}` }
    });
    setVideos(res.data);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();

    await axios.post(
      "http://localhost:5000/api/videos",
      form,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    fetchVideos();

    setForm({
      title: "",
      videoUrl: "",
      thumbnailUrl: "",
      category: ""
    });
  };

  const deleteVideo = async id => {
    await axios.delete(
      `http://localhost:5000/api/videos/${id}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    fetchVideos();
  };

  return (
    <div className="channel">
      <h1>Your Channel</h1>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="form">
        <input
          placeholder="Title"
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
        />
        <input
          placeholder="Video URL"
          value={form.videoUrl}
          onChange={e => setForm({ ...form, videoUrl: e.target.value })}
        />
        <input
          placeholder="Thumbnail URL"
          value={form.thumbnailUrl}
          onChange={e => setForm({ ...form, thumbnailUrl: e.target.value })}
        />
        <input
          placeholder="Category"
          value={form.category}
          onChange={e => setForm({ ...form, category: e.target.value })}
        />
        <button>Add Video</button>
      </form>

      {/* VIDEO LIST */}
      <div className="grid">
        {videos.map(v => (
          <div className="card" key={v._id}>
            <img src={v.thumbnailUrl} alt="" />
            <h3>{v.title}</h3>
            <button onClick={() => deleteVideo(v._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Channel;



