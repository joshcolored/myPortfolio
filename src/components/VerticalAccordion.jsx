import { FiDollarSign } from "react-icons/fi";
import { FaQrcode, FaBoxOpen } from "react-icons/fa";
import { GiGearHammer } from "react-icons/gi";
import { AnimatePresence, motion } from "framer-motion";
import { MdLocalShipping } from "react-icons/md";
import { useWindowSize } from "./useWindowSize";
import { useState } from "react";
import bg1 from "../assets/valfcibg.png"
import myqrbg from "../assets/myqrbg.png"
import kabayanbg from "../assets/kabayanbg.png"
import combg from "../assets/comcont.png"
import kcmli from "../assets/kcmli.png"

const VerticalAccordion = () => {
  const [open, setOpen] = useState(items[0].id);

  return (
    <section className="h-[80vh] pt-8 bg-[#F4FFF8] md:h-[100vh] md:p-4">
      <Header />
      <div className="flex flex-col lg:flex-row h-fit lg:h-[450px] w-full max-w-6xl mx-auto shadow overflow-hidden">
        {items.map((item) => {
          return (
            <Panel
              key={item.id}
              open={open}
              setOpen={setOpen}
              id={item.id}
              Icon={item.Icon}
              title={item.title}
              imgSrc={item.imgSrc}
              description={item.description}
            />
          );
        })}
      </div>
    </section>
  );
};
const Header = () => {
  return (
    <h2 className="text-[#4D4847] font-bold text-5xl text-pretty mx-auto text-center mt-7 mb-10">
      Projects
    </h2>
  );
};
const Panel = ({ open, setOpen, id, Icon, title, imgSrc, description }) => {
  const { width } = useWindowSize();
  const isOpen = open === id;

  return (
    <>
      <button
        className="bg-white rounded shadow-2xl hover:bg-slate-50 transition-colors p-3 border-r-[1px] border-b-[1px] border-slate-200 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
        onClick={() => setOpen(id)}
      >
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden lg:block text-xl font-light rotate-180"
        >
          {title}
        </span>
        <span className="block lg:hidden text-xl font-light">{title}</span>
        <div className="w-6 lg:w-full aspect-square bg-[#1C3738] text-white grid place-items-center">
          <Icon />
        </div>
        <span className="w-4 h-4 bg-white group-hover:bg-slate-50 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-200 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full h-full overflow-hidden relative bg-black flex items-end"
          >
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-4 py-2 bg-black/40 backdrop-blur-sm text-white"
            >
              <p>{description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VerticalAccordion;

const panelVariants = {
  open: {
    width: "100%",
    height: "100%",
  },
  closed: {
    width: "0%",
    height: "100%",
  },
};

const panelVariantsSm = {
  open: {
    width: "100%",
    height: "200px",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};

const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: "100%" },
};

const items = [
  {
    id: 1,
    title: "VALFCI - Financial Consultancy",
    Icon: FiDollarSign,
    imgSrc:
      bg1,
    description:
      "From retirement planning and investment management to tax optimization and estate planning, we offer a full spectrum of financial services to address every aspect of your financial journey.",
  },
  {
    id: 2,
    title: "MyQR - Panasiatic Solutions Inc.",
    Icon: FaQrcode,
    imgSrc:
      myqrbg,
    description:
      "A QR ID system uses QR codes to store and share identification information efficiently.",
  },
  {
    id: 3,
    title: "Kabayan Cargo Movers LLC.",
    Icon: MdLocalShipping,
    imgSrc:
      kabayanbg,
    description:
      "In 2010, Kabayan Cargo Movers emerged with a vision: to redefine logistics by seamlessly connecting businesses and individuals worldwide. ",
  },
  {
    id: 4,
    title: "KCM Luxe Interiors",
    Icon: FaBoxOpen,
    imgSrc:
      kcmli,
    description:
      "Kabayan Cargo Movers - Luxe Interiors is a comprehensive logistics and moving company offering installations or furniture services, transportation, warehousing, and furnishing.",
  },
  {
    id: 5,
    title: "Coming Soon",
    Icon: GiGearHammer,
    imgSrc:
      combg,
    description:
      "Coming Soon. ⚙️",
  },
];
