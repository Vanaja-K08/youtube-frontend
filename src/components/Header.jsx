
import { useNavigate } from "react-router-dom";
import "../styles/header.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Header({ toggleSidebar,setSearch  }) {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

    const token = localStorage.getItem("token");

   useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

   const handleChannelClick = async () => {
    // if (!token) {
    //   navigate("/login");
    // } else {
    //   navigate("/channel");
    // }


    if (!token) return navigate("/login");

  try {
   const users = await axios.get("http://localhost:5000/api/channel/me", {
      headers: { Authorization: `Bearer ${token}` }
    });

    console.log(users)

    // channel exists
    navigate("/channel");
  } catch {
    // no channel
    navigate("/create-channel");
  }
};

  const logout = () => {
    localStorage.clear();
    setUser(null);
    // navigate("/login");
  };

   const viewChannel = () => {
    const channelId = localStorage.getItem("channelId");

  if (!channelId) {
    alert("Create channel first");
    navigate("/create-channel");
    return;
  }

  navigate(`/channel/${channelId}`);
  };

  return (
    <div className="header">
      <div className="header-left">
        <span
          className="menu-icon"
          onClick={toggleSidebar}
        >
          ☰
        </span>
        <span className="logo">YouTube</span>
      </div>

      <input
        type="text"
        placeholder="Search"
        className="search-box"
        onChange={(e) => setSearch(e.target.value)}
      />



      <div className="header-right">
        {/* {!user ? (
          <button
            className="signin-btn"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        ) : (
          <span className="user-name">{user.username.charAt(0).toUpperCase()}</span>
        )} */}

{/* <button onClick={() => navigate("/create-channel")}>
  Create Channel
</button> */}

        <button onClick={handleChannelClick} className="channelBtn">
          Channel
        </button>

         {!user ? (
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
        ) : (
          <div className="user-wrapper">
            <div className="user-icon">
              {user.username.charAt(0).toUpperCase()}
            </div>

            {/* Hover Card */}
            <div className="user-hover">
              <p className="name">{user.username}</p>
              <p className="email">{user.email}</p>
              <button onClick={logout} >Logout</button>
              <button onClick={viewChannel}>View Channel</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

