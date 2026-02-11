import { useState } from "react";

const CreateChannel = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const submit = async () => {
    await fetch("http://localhost:5000/api/channels", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({ name, description })
    });

    window.location.reload();
  };

  return (
    <div>
      <h3>Create Channel</h3>
      <input placeholder="Channel Name" onChange={e => setName(e.target.value)} />
      <textarea placeholder="Description" onChange={e => setDescription(e.target.value)} />
      <button onClick={submit}>Create</button>
    </div>
  );
};

export default CreateChannel;
