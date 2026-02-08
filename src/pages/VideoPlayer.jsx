import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

const VideoPlayer = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    API.get(`/videos/${id}`).then(res => setVideo(res.data));
    API.get(`/comments/${id}`).then(res => setComments(res.data));
  }, [id]);

  const addComment = async () => {
    await API.post("/comments", { text, videoId: id });
    setText("");
    const res = await API.get(`/comments/${id}`);
    setComments(res.data);
  };

  const deleteComment = async (cid) => {
    await API.delete(`/comments/${cid}`);
    setComments(comments.filter(c => c._id !== cid));
  };

  const like = async () => {
    const res = await API.post(`/videos/${id}/like`);
    setVideo(res.data);
  };

  const dislike = async () => {
    const res = await API.post(`/videos/${id}/dislike`);
    setVideo(res.data);
  };

  if (!video) return <p>Loading...</p>;

  return (
    <div className="player-page">
      <video src={video.videoUrl} controls width="100%" />

      <h2>{video.title}</h2>
      <p>{video.description}</p>
      <p><b>{video.channel?.name}</b></p>

      <div className="actions">
        <button onClick={like}>👍 {video.likes}</button>
        <button onClick={dislike}>👎 {video.dislikes}</button>
      </div>

      <div className="comments">
        <h3>Comments</h3>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a comment"
        />
        <button onClick={addComment}>Post</button>

        {comments.map(c => (
          <div key={c._id} className="comment">
            <b>{c.user?.username}</b>
            <p>{c.text}</p>
            <button onClick={() => deleteComment(c._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPlayer;
