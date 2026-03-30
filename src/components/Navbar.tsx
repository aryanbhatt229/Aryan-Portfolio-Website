import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import Lenis from "lenis";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

export let smoother: {
  paused: (state: boolean) => void;
  scrollTop: (val: number) => void;
  scrollTo: (target: any, smooth: boolean, position: string) => void;
};

const Navbar = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Mock Smoother API for compatibility
    smoother = {
      paused: (state: boolean) => {
        if (state) lenis.stop();
        else lenis.start();
      },
      scrollTop: (val: number) => {
        lenis.scrollTo(val, { immediate: true });
      },
      scrollTo: (target: any, _smooth: boolean, _position: string) => {
        lenis.scrollTo(target);
      },
    };

    smoother.scrollTop(0);
    smoother.paused(true);

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          if (section) lenis.scrollTo(section);
        }
      });
    });

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <>
      <div className="header">
        <a 
          href="/#" 
          className="navbar-title" 
          data-cursor="disable"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: "1.4rem",
            letterSpacing: "2px",
            background: "linear-gradient(to right, #a855f7, #7c3aed)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          AB
        </a>
        <a
          href="mailto:bhattaryan226@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          bhattaryan226@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
