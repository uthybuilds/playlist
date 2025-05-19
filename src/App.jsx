import React, { useEffect } from "react";
import "./App.css";

const App = () => {
  const handleClick = () => {
    window.location.href =
      "https://open.spotify.com/playlist/7z2QrPPxOwRFsYVFhnle0Q?si=lfcactFgQ-WQoUI-3I2hfw";
  };

  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.textContent = "💖";
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.fontSize = `${20 + Math.random() * 20}px`;
      heart.style.animationDuration = `${4 + Math.random() * 2}s`;
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 7000);
    };

    const interval = setInterval(createHeart, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1></h1>
      <p>Love, In Every Note 🎶</p>
      <button onClick={handleClick}>Open Playlist</button>
    </div>
  );
};

export default App;
