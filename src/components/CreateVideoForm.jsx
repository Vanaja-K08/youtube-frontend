import { useState } from "react";
import "../styles/CreateVideoForm.css";

const CreateVideoForm = () => {
  const [form, setForm] = useState({
    title: "",
    videoUrl: "",
    thumbnailUrl: "",
    category: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/videos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify(form)
    });

    if (res.ok) {
      alert("Video uploaded");
      setForm({ title: "", videoUrl: "", thumbnailUrl: "", category: "" });
    } else {
      alert("Upload failed");
    }
  };

  return (
    <form className="video-form" onSubmit={submit}>
      <h3>Upload Video</h3>

      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
      <input name="videoUrl" placeholder="Video URL" value={form.videoUrl} onChange={handleChange} />
      <input name="thumbnailUrl" placeholder="Thumbnail URL" value={form.thumbnailUrl} onChange={handleChange} />
      <input name="category" placeholder="Category" value={form.category} onChange={handleChange} />

      <button>Upload</button>
    </form>
  );
};

export default CreateVideoForm;
