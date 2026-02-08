import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VideoPlayer from "./pages/VideoPlayer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
         <Route path="/video/:id" element={<VideoPlayer />} />
      </Routes>
    </div>
  );
}

export default App;