// import { useParams } from "react-router-dom";
// import { useState } from "react";
// import Header from "../components/Header";

// export default function VideoPlayer() {
//   const { id } = useParams();

//   const [likes, setLikes] = useState(10);
//   const [dislikes, setDislikes] = useState(2);

//   const [comments, setComments] = useState([
//     { id: 1, text: "Great video!" },
//     { id: 2, text: "Very helpful 👍" },
//   ]);

//   const [newComment, setNewComment] = useState("");
//   const [editingId, setEditingId] = useState(null);

//   const handleAddComment = () => {
//     if (!newComment) return;

//     setComments([
//       ...comments,
//       { id: Date.now(), text: newComment },
//     ]);
//     setNewComment("");
//   };

//   const handleDelete = (id) => {
//     setComments(comments.filter((c) => c.id !== id));
//   };

//   const handleEdit = (id, text) => {
//     setEditingId(id);
//     setNewComment(text);
//   };

//   const handleUpdate = () => {
//     setComments(
//       comments.map((c) =>
//         c.id === editingId ? { ...c, text: newComment } : c
//       )
//     );
//     setEditingId(null);
//     setNewComment("");
//   };

//   return (
//     <>
//       <Header />

//       <div style={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>
//         {/* Video */}
//         <video controls width="100%">
//           <source
//             src="https://www.w3schools.com/html/mov_bbb.mp4"
//             type="video/mp4"
//           />
//         </video>

//         <h2>Learn React in 30 Minutes</h2>

//         {/* Like / Dislike */}
//         <div style={{ display: "flex", gap: "10px" }}>
//           <button onClick={() => setLikes(likes + 1)}>👍 {likes}</button>
//           <button onClick={() => setDislikes(dislikes + 1)}>👎 {dislikes}</button>
//         </div>

//         {/* Comments */}
//         <h3 style={{ marginTop: "30px" }}>Comments</h3>

//         <input
//           value={newComment}
//           onChange={(e) => setNewComment(e.target.value)}
//           placeholder="Add a comment"
//           style={{ width: "100%", padding: "8px" }}
//         />

//         <button
//           onClick={editingId ? handleUpdate : handleAddComment}
//           style={{ marginTop: "10px" }}
//         >
//           {editingId ? "Update Comment" : "Add Comment"}
//         </button>

//         {/* Comment List */}
//         {comments.map((c) => (
//           <div
//             key={c.id}
//             style={{
//               marginTop: "10px",
//               padding: "10px",
//               border: "1px solid #ddd",
//             }}
//           >
//             <p>{c.text}</p>

//             <button onClick={() => handleEdit(c.id, c.text)}>Edit</button>
//             <button onClick={() => handleDelete(c.id)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { authFetch } from "../api/video";

export default function VideoPlayer() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    authFetch(`/videos/${id}`)
      .then(res => res.json())
      .then(setVideo);
  }, []);

  if (!video) return <p>Loading...</p>;

  return (
    <div className="player">
      <video controls src={video.videoUrl}></video>
      <h2>{video.title}</h2>
      <p>{video.description}</p>
      <p>👍 {video.likes} 👎 {video.dislikes}</p>
    </div>
  );
}
