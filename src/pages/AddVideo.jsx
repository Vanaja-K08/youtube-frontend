import { useState } from "react";
import { authFetch } from "./../api/video";

export default function AddVideo() {
  const [data, setData] = useState({
    title: "", thumbnailUrl: "", videoUrl: "", category: ""
  });

  const submit = async () => {
    await authFetch("/videos", {
      method: "POST",
      body: JSON.stringify(data)
    });
    alert("Video added");
  };

  return (
    <div className="form">
      <input placeholder="Title" onChange={e=>setData({...data,title:e.target.value})}/>
      <input placeholder="Thumbnail URL" onChange={e=>setData({...data,thumbnailUrl:e.target.value})}/>
      <input placeholder="Video URL" onChange={e=>setData({...data,videoUrl:e.target.value})}/>
      <input placeholder="Category" onChange={e=>setData({...data,category:e.target.value})}/>
      <button onClick={submit}>Upload</button>
    </div>
  );
}
