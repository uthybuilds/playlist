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
      const symbols = ["💖", "🎶", "🎵", "💗", "💓"];
      heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
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
    <div className="container">
      <div className="main-content">
        <div className="image-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="love-icon"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </div>
        <h1></h1>
        <p className="subtitle">Love, In Every Note 🎶</p>
        <button className="cta-button" onClick={handleClick}>
          Open Playlist
        </button>
      </div>
    </div>
  );
};

export default App;
