import "./styles/GenAICreations.css";
import img1 from "../assets/genai-1.jpeg";
import img2 from "../assets/genai-2.jpeg";
import img3 from "../assets/genai-3.jpeg";
import img4 from "../assets/genai-4.jpeg";

const GenAICreations = () => {
  return (
    <div className="genai-section section-container" id="genai">
      <div className="genai-container">
        <h2>
          Gen AI <span>Creations</span>
        </h2>
        
        <div className="genai-grid">
          <div className="genai-image-wrapper">
            <img src={img1} alt="Gen AI Creation 1" />
          </div>
          <div className="genai-image-wrapper">
            <img src={img2} alt="Gen AI Creation 2" />
          </div>
          <div className="genai-image-wrapper">
            <img src={img3} alt="Gen AI Creation 3" />
          </div>
          <div className="genai-image-wrapper">
            <img src={img4} alt="Gen AI Creation 4" />
          </div>
        </div>

        <div className="genai-button-container">
          <a
            href="https://drive.google.com/drive/folders/18f9hiqSY4Azf3zWx27o1Ltin9Z3aXE5R?usp=sharing"
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

export default GenAICreations;
