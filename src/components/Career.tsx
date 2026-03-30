import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Automation & Social Media Manager Intern</h4>
                <h5>Aransh Enterprises, Ghaziabad</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Managed end-to-end social media operations, created AI-generated visual content, maintained brand consistency and explored automation workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Growth Intern</h4>
                <h5>Two99, Noida</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Built and tested AI workflows for research, content generation and publishing. Designed prompts for AI agents and supported Generative Engine Optimization (GEO) analysis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
