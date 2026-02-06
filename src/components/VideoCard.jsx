export default function VideoCard({ video }) {
  return (
    <div style={{ width: 200 }}>
      <img src={video.thumbnail} width="200" />
      <h4>{video.title}</h4>
      <p>{video.channel}</p>
      <small>{video.views} views</small>
    </div>
  );
}
