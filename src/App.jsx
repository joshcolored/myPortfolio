import { useRef, useState } from "react";
import Chip from "./components/Chip";
import ShuffleGrid from "./components/ShuffleGrid";
import BubbleText from "./components/BubbleText";
import AboutContent from "./components/AboutContent";
import VerticalAccordion from "./components/VerticalAccordion"

const tabs = ["Home", "About" ,"Projects"];

const App = () => {
  const [selected, setSelected] = useState(tabs[0]); // Initialize with the first tab

  const aboutRef = useRef(null);
  const projectRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleTabClick = (tab) => {
    setSelected(tab);
    switch (tab) {
      case "About":
        scrollToSection(aboutRef);
        break;
      case "Projects":
        scrollToSection(projectRef);
        break;
      default:
        break;
    }
  };

  const handleFindClassClick = () => {
    scrollToSection(educationRef);
  };

  const downloadResume = () => {
    const filePath = "/resume.pdf";
    const anchorElement = document.createElement("a");
    anchorElement.href = filePath;
    anchorElement.download = "resume-grijaldo-joshua.pdf";
    document.body.appendChild(anchorElement);
    anchorElement.click();
    document.body.removeChild(anchorElement);
  };

  return (
    <div className="bg-[#F4FFF8] text-[#000F08] bg-[100vh]">
      <div className="max-w-screen-lg mx-auto">
        <div className="pt-9 bg-inherit flex items-center justify-center flex-wrap gap-2 md:justify-center md:px-0">
          {tabs.map((tab) => (
            <Chip
              text={tab}
              selected={selected === tab}
              onClick={() => handleTabClick(tab)}
              key={tab}
            />
          ))}
        </div>
      </div>

      <section className="w-full px-8 pb-24 pt-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
        <div>
          <span className="block mb-4 text-xs md:text-sm text-[#1C3738] font-medium">
            Better to be productive every day
          </span>
          <BubbleText />
          <p className="text-base md:text-lg text-[#000F08] my-4 md:my-6">
            I`m Joshua C. Grijaldo, an aspiring Web Developer. Passionate about
            innovation and continuous learning, I thrive on challenging projects
            that allow me to showcase my creativity and problem-solving skills.
          </p>
          <div className="flex gap-2">
            <button
              onClick={handleFindClassClick}
              className="px-6 py-2 rounded font-medium bg-[#1C3738] text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
            >
              Projects
            </button>
            <button
              onClick={downloadResume}
              className="relative px-6 py-2 rounded font-medium border border-[#1C3738] text-[#1C3738] w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
            >
              <div className="absolute top-0 right-0 mt-[-4px] mr-[-4px]">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1C3738] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#1C3738]"></span>
                </span>
              </div>
              Resume
            </button>
          </div>
        </div>
        <ShuffleGrid />
      </section>
      <div ref={aboutRef} className="bg-white">
        <AboutContent />
      </div>
      <div ref={projectRef} className="bg-white">
       <VerticalAccordion />
      </div>
    </div>
  );
};

export default App;
