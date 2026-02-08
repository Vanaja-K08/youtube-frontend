// import "./../styles/video.css";

// export default function VideoCard({ video, onDelete }) {
//   return (
//     <div className="video-card">
//       <img src={video.thumbnailUrl} alt="thumb" />
//       <h3>{video.title}</h3>
//       <p>{video.channelName}</p>
//       <p>{video.views} views</p>

//       <button className="delete" onClick={() => onDelete(video._id)}>
//         Delete
//       </button>
//     </div>
//   );
// }
export default function VideoCard({ video, onDelete }) {
  return (
    <div className="video-card">
      <img src={video.thumbnailUrl} />
      <h4>{video.title}</h4>
      <p>{video.category}</p>
      <button onClick={() => onDelete(video._id)}>Delete</button>
    </div>
  );
}

