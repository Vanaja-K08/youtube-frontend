import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateChannel = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const token = localStorage.getItem("token");
const navigate = useNavigate();

  const handleSubmit = async e => {
  e.preventDefault();

 try {
      const res = await axios.post(
        "http://localhost:5000/api/channel",
        { name, description },
        { headers: { Authorization: `Bearer ${token}` } }

      );
      alert(res.data.message);
       navigate("/"); // ✅ go to home
    } catch (err) {
      alert(err.response?.data?.message || "Error creating channel");
    }

};
  return (
    <div style={{ padding: 40 }}>
      <h2>Create Channel</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Channel name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <br /><br />

        <input
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

        <br /><br />

        <button>Create Channel</button>
      </form>
    </div>
  );
};

export default CreateChannel;
