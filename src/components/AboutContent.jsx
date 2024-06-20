import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiMail, FiMapPin } from "react-icons/fi";
import { GiSkills } from "react-icons/gi";
import { SiFacebook, SiGithub, SiTelegram } from "react-icons/si";
import { AiOutlineRobot } from "react-icons/ai";

const AboutContent = () => {
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
    <Block className="col-span-12 row-span-2 md:col-span-6">
      <div className="text-5xl mb-7 flex flex-row">
        <h3 className="text-2xl">Skills & Technologies</h3>
        <div className="text-2xl ml-2 mt-1">
          <GiSkills />
        </div>
      </div>
      <div className="grid grid-cols-3 mr-6 gap-12 text-center md:ml-[-1px]">
        <p className="">HTML</p>
        <p className="">CSS</p>
        <p className="">PHP</p>
        <p className="">React</p>
        <p className="">Javascript</p>
        <p className="">TailwindCSS</p>
        <p className="">NodeJS</p>
        <p className="">Git & GitHub</p>
        <p className="">OpenAI</p>
      </div>
      <a
        href="#"
        className="flex items-center gap-1 text-[#F4FFF8] hover:underline"
      ></a>
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
      <a href="https://www.facebook.com/mntosss">
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
      About Me
    </h2>
  );
};

export default AboutContent;
