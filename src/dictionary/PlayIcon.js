import React from "react";
import "./PlayIcon.css";

export default function PlayIcon({ audioLink }) {
  function playAudio(e) {
    e.preventDefault();
    let sound = new Audio(audioLink);
    sound.autoplay = true;
  }

  return (
    <span className="playIconContainer" onClick={playAudio}>
      <i className="fa-solid fa-headphones"></i>
    </span>
  );
}
