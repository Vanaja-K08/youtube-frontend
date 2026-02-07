import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VideoPlayer from "./pages/VideoPlayer";
import Channel from "./pages/Channel";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/video/:id" element={<VideoPlayer />} />
        <Route path="/channel" element={<Channel />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  );
}
