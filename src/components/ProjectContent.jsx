import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiMail, FiMapPin } from "react-icons/fi";
import bgImage1 from "../assets/valfcicont.png";
import bgImage2 from "../assets/myqrcont.png";
import bgImage3 from "../assets/kabcont.png";
import bgImage4 from "../assets/comcont.png";
import { SiFacebook, SiGithub, SiTelegram } from "react-icons/si";
import { AiOutlineRobot } from "react-icons/ai";

const ProjectContent = () => {

  return (
    <div className="min-h-screen bg-[#000F08] px-4 py-12 text-[#F4FFF8]">
      <Header />
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <ProjectBlock />
        <AboutBlock />
        <LocationBlock />
        <EmailListBlock />
        <SocialBlock />
      </motion.div>
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-[#4D4847] bg-[#1C3738] p-6",
        className
      )}
      {...rest}
    />
  );
};

Block.propTypes = {
  className: PropTypes.string.isRequired,
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <div className="text-5xl mb-7">
      <AiOutlineRobot />
    </div>
    <h1 className="mb-12 text-[#F4FFF8] text-4xl font-medium leading-tight">
      Hi, I`m Josh.{" "}
      <span className="inline-block animate-wave transform origin-bottom-right">
        👋
      </span>{" "}
      <br className="mb-4"></br>
      <span className="text-[#8BAAAD]">
        I build cool websites like this one.
      </span>
    </h1>
    <a
      href="#"
      className="flex items-center gap-1 text-[#F4FFF8] hover:underline"
    ></a>
  </Block>
);

const ProjectBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.5,
        zIndex: 99,
      }}
      className="col-span-6 md:col-span-3"
      style={{
        backgroundImage: `url(${bgImage1})`, // Set the background image
        backgroundSize: "cover", // Optional: Adjust background size
        backgroundPosition: "center", // Optional: Adjust background position
        // Add any other CSS properties you need
      }}
    >
      <a
        href="https://valfci.com"
        className="grid h-full place-content-center text-3xl text-white"
      >
        {/* Content inside your block */}
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.5,
        zIndex: 99,
      }}
      className="col-span-6 md:col-span-3"
      style={{
        backgroundImage: `url(${bgImage2})`, // Set the background image
        backgroundSize: "cover", // Optional: Adjust background size
        backgroundPosition: "center", // Optional: Adjust background position
        // Add any other CSS properties you need
      }}
    >
      <a
        href="https://valfci.com"
        className="grid h-full place-content-center text-3xl text-white"
      >
        {/* Content inside your block */}
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.5,
        zIndex: 99,
      }}
      className="col-span-6 md:col-span-3"
      style={{
        backgroundImage: `url(${bgImage3})`, // Set the background image
        backgroundSize: "cover", // Optional: Adjust background size
        backgroundPosition: "center", // Optional: Adjust background position
        // Add any other CSS properties you need
      }}
    >
      <a
        href="https://valfci.com"
        className="grid h-full place-content-center text-3xl text-white"
      >
        {/* Content inside your block */}
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.5,
        zIndex: 99,
      }}
      className="col-span-6 md:col-span-3"
      style={{
        backgroundImage: `url(${bgImage4})`, // Set the background image
        backgroundSize: "cover", // Optional: Adjust background size
        backgroundPosition: "center", // Optional: Adjust background position
        // Add any other CSS properties you need
      }}
    >
      <a
        href="https://valfci.com"
        className="grid h-full place-content-center text-3xl text-white"
      >
        {/* Content inside your block */}
      </a>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p>
      My passion is building cool stuff.{" "}
      <span className="text-[#8BAAAD]">
        I build primarily with React, Tailwind CSS, and Framer Motion. I love
        this stack so much that I even built a website about it. 🚀
      </span>
    </p>
  </Block>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
    <FiMapPin className="text-3xl" />
    <p className="text-center text-lg text-[#8BAAAD]">Philippines</p>
  </Block>
);

const EmailListBlock = () => (
  <Block className="col-span-12 md:col-span-6">
    <p className="mb-3 text-lg">Let`s work together!</p>
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center gap-2"
    >
      <FiMail />
      <a
        href="mailto:grijaldo.joshua29@gmail.com"
        className="py-1.5 underline text-xl  text-white"
      >
        grijaldo.joshua29@gmail.com
      </a>
    </form>
  </Block>
);
const SocialBlock = () => (
  
  <Block className="col-span-12 flex flex-col items-center md:col-span-3">
    <p className="text-center mb-4 text-lg text-[#8BAAAD]">Socials</p>
    <div className="flex flex-row gap-4 justify-center">
      <a
        href="https://www.facebook.com/mntosss"
      >
        <SiFacebook className="text-3xl" />
      </a>

      <a href="https://www.github.com/zyphyres">
        <SiGithub className="text-3xl" />
      </a>
      <a href="#">
        <SiTelegram className="text-3xl" />
      </a>
    </div>
  </Block>
);
const Header = () => {
  return (
    <h2 className="text-[#F4FFF8] font-bold text-5xl text-pretty mx-auto text-center mt-2 mb-16">
      Projects
    </h2>
  );
};

export default ProjectContent;
