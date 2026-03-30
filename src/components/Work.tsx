import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const myProjects = [
  {
    name: "Markgrid – GEO Platform",
    category: "AI / Brand Intelligence",
    tools: "Prompt Engineering, OpenAI, AI Agents"
  },
  {
    name: "AI Social Media Automation",
    category: "Automation / Content",
    tools: "Make, n8n, OpenAI, Google Sheets"
  },
  {
    name: "Brand Research & Intelligence Tool",
    category: "AI / Research",
    tools: "Prompt Engineering, OpenAI, AI Agents"
  },
  {
    name: "AI Chatbots & Workflow Automation",
    category: "AI / Automation",
    tools: "Conversational AI, OpenAI"
  },
  {
    name: "AI Content Research & Idea Engine",
    category: "AI / Content Strategy",
    tools: "OpenAI, Make, n8n, Google Sheets"
  },
  {
    name: "AI-Powered Content Automation",
    category: "Automation",
    tools: "OpenAI, Canva, Google Sheets"
  }
];

const Work = () => {
  useGSAP(() => {
    const workFlex = document.querySelector(".work-flex") as HTMLElement;
    const boxes = document.querySelectorAll(".work-box");

    const getScrollAmount = () => {
      let totalWidth = 0;
      boxes.forEach((box: any) => {
        totalWidth += box.offsetWidth;
      });
      // The container has a left margin offset and padding. We calculate exact distance to slide the last box into view fully.
      // Offset by the window width so it stops beautifully when the right edge is reached.
      return totalWidth - window.innerWidth + 250; 
    };

    let tween = gsap.to(workFlex, {
      x: () => -getScrollAmount(),
      ease: "none",
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${getScrollAmount()}`,
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
        id: "work"
      }
    });

    return () => {
      tween.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {myProjects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image="/images/placeholder.webp" alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
