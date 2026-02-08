import { useEffect, useState } from "react";
import "../styles/Comments.css"

const Comments = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const fetchComments = async () => {
    const res = await fetch(`http://localhost:5000/api/comments/${videoId}`);
    const data = await res.json();
    setComments(data);
  };

  useEffect(() => {
    fetchComments();
  }, [videoId]);

  /* ADD COMMENT */
  const addComment = async () => {
    if (!text.trim()) return;

    await fetch(`http://localhost:5000/api/comments/${videoId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ text })
    });

    setText("");
    fetchComments();
  };

  /* DELETE COMMENT */
  const deleteComment = async (id) => {
    await fetch(`http://localhost:5000/api/comments/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    fetchComments();
  };

  /* UPDATE COMMENT */
  const editComment = async (id, oldText) => {
    const newText = prompt("Edit comment", oldText);
    if (!newText) return;

    await fetch(`http://localhost:5000/api/comments/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ text: newText })
    });

    fetchComments();
  };

  return (
    <div className="comments-container">
      <h3>{comments.length} Comments</h3>

      {user && (
        <div className="add-comment">
          <div className="avatar">
            {user.username.charAt(0).toUpperCase()}
          </div>

          <div className="input-area">
            <input
              type="text"
              placeholder="Add a comment..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button onClick={addComment}>Comment</button>
          </div>
        </div>
      )}

      {comments.map((c) => (
        <div className="comment" key={c._id}>
          <div className="avatar">
            {c.user.username.charAt(0).toUpperCase()}
          </div>

          <div className="comment-body">
            <span className="username">{c.user.username}</span>
            <p>{c.text}</p>

            {user && user._id === c.user._id && (
              <div className="actions">
                <button onClick={() => editComment(c._id, c.text)}>Edit</button>
                <button onClick={() => deleteComment(c._id)}>Delete</button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
