import { useState } from "react";
import Header from "../components/Header";

export default function Channel() {
  // 🔹 Videos state
  const [videos, setVideos] = useState([
    { id: 1, title: "React Basics" },
    { id: 2, title: "Node.js Tutorial" },
  ]);

  // 🔹 Input state
  const [newTitle, setNewTitle] = useState("");

  // 🔹 Edit state
  const [editId, setEditId] = useState(null);

  return (
    <>
      <Header />

      <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
        <h2>My Channel</h2>

        {/* ➕ ADD VIDEO */}
        <input
          placeholder="Video title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          style={{ padding: "8px", width: "100%", marginBottom: "10px" }}
        />

        <button
          onClick={() => {
            if (!newTitle) return;
            setVideos([...videos, { id: Date.now(), title: newTitle }]);
            setNewTitle("");
          }}
        >
          Add Video
        </button>

        {/* 📺 VIDEO LIST */}
        {videos.map((video) => (
          <div
            key={video.id}
            style={{
              padding: "10px",
              border: "1px solid #ddd",
              marginTop: "15px",
            }}
          >
            {/* ✏️ EDIT OR VIEW */}
            {editId === video.id ? (
              <input
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
            ) : (
              <p>{video.title}</p>
            )}

            {/* 🛠 ACTION BUTTONS */}
            <button
              onClick={() => {
                setEditId(video.id);
                setNewTitle(video.title);
              }}
            >
              Edit
            </button>

            <button
              onClick={() => {
                setVideos(videos.filter((v) => v.id !== video.id));
              }}
            >
              Delete
            </button>

            {editId === video.id && (
              <button
                onClick={() => {
                  setVideos(
                    videos.map((v) =>
                      v.id === editId ? { ...v, title: newTitle } : v
                    )
                  );
                  setEditId(null);
                  setNewTitle("");
                }}
              >
                Save
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
