import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VideoPlayer from "./pages/VideoPlayer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Channel from "./pages/Channel";
import CreateChannel from "./components/CreateChannel";
import CreateVideoForm from "./components/CreateVideoForm";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
         <Route path="/video/:id" element={<VideoPlayer />} />
         <Route path="/channel" element={<CreateVideoForm />} />
        <Route path="/create-channel" element={<CreateChannel />} />
       <Route path="/channel/:id" element={<Channel />} />
      </Routes>
    </div>
  );
}

export default App;