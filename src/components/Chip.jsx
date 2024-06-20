import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Chip = ({ text, selected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        selected
          ? "text-[#F4FFF8]"
          : "text-[#000F08] hover:text-slate-200 hover:bg-[#4D4847]"
      } text-sm md:text-lg transition-colors px-2.5 py-0.5 rounded-md relative`}
    >
      <span className="relative z-10">{text}</span>

      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-[#1C3738] rounded-md"
        ></motion.span>
      )}
    </button>
  );
};

Chip.propTypes = {
  text: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Chip;
