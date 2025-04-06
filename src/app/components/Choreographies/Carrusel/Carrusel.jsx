"use client";
import { useState } from "react";
import "../Carrusel/carrusel.css";
import { motion } from "motion/react"

export const Carrusel = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  function moveLeft() {
    setCurrentVideo((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  }

  function moveRight() {
    setCurrentVideo((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  }

  const videos = [
    "../../../assets/coreografia-1.mp4",
    "../../../assets/concierto-2024.mp4",
    "../../../assets/concierto-2023.mp4",
    "../../../assets/coreografia-2.mp4",
    "../../../assets/coreografia-3.mp4",
  ];

  return (
    <>
      <div className="video-container">
        <button onClick={moveLeft}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 7 16"
          >
            <path
              fill="currentColor"
              d="M5.5 13a.47.47 0 0 1-.35-.15l-4.5-4.5c-.2-.2-.2-.51 0-.71l4.5-4.49c.2-.2.51-.2.71 0s.2.51 0 .71L1.71 8l4.15 4.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z"
            />
          </svg>
        </button>
        <motion.div
          key={currentVideo}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="video-wrapper"
        >
          <iframe
            width="560"
            height="315"
            src={videos[currentVideo]}
            title="YouTube video player"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>

        <button onClick={moveRight}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 7 16"
          >
            <path
              fill="currentColor"
              d="M1.5 13a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71L5.3 7.99L1.15 3.85c-.2-.2-.2-.51 0-.71s.51-.2.71 0l4.49 4.51c.2.2.2.51 0 .71l-4.5 4.49c-.1.1-.23.15-.35.15"
            />
          </svg>
        </button>
      </div>
    </>
  );
};
