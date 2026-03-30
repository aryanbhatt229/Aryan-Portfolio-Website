import "./styles/GenAICreations.css";
import React from "react";
import vid1 from "../assets/Genvid-1.mp4";
import vid2 from "../assets/Genvid-2.mp4";
import vid3 from "../assets/Genvid-3.mp4";
import vid4 from "../assets/Genvid-4.mov";

const GenAIVideos = () => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLVideoElement>) => {
    e.currentTarget.play();
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLVideoElement>) => {
    e.currentTarget.pause();
    e.currentTarget.currentTime = 0;
  };

  return (
    <div className="genai-section section-container" id="genai-videos">
      <div className="genai-container">
        <h2>
          Gen AI <span>Videos</span>
        </h2>
        
        <div className="genai-grid">
          <div className="genai-image-wrapper">
            <video 
              src={vid1} 
              muted loop playsInline 
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave} 
            />
          </div>
          <div className="genai-image-wrapper">
            <video 
              src={vid2} 
              muted loop playsInline 
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave} 
            />
          </div>
          <div className="genai-image-wrapper">
            <video 
              src={vid3} 
              muted loop playsInline 
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave} 
            />
          </div>
          <div className="genai-image-wrapper">
            <video 
              src={vid4} 
              muted loop playsInline 
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave} 
            />
          </div>
        </div>

        <div className="genai-button-container">
          <a
            href="https://drive.google.com/drive/folders/1PWaVeP-qv1PfBvNMemKSLlwr2TyumJQW?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="genai-button"
            data-cursor="disable"
          >
            View More &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default GenAIVideos;
