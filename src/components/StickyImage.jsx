import PropTypes from "prop-types";

const StickyImage = ({ imgUrl }) => {
  return (
    <div className="absolute inset-0 z-0">
      <img
        src={imgUrl}
        alt="Sticky Background"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

StickyImage.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};

export default StickyImage;
