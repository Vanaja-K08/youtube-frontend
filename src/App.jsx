import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VideoPlayer from "./pages/VideoPlayer";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<VideoPlayer />} />
      </Routes>
  );
}
