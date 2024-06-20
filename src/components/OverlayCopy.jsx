import PropTypes from "prop-types";

const OverlayCopy = ({ subheading, heading }) => {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 z-0">
    <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
      <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
        {heading}
      </h2>
      <span className="text-white text-lg md:text-xl mt-2">{subheading}</span>
    </div>
    </div>
  );
};

OverlayCopy.propTypes = {
  subheading: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
};

export default OverlayCopy;
