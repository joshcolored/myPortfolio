import PropTypes from "prop-types";
import StickyImage from "./StickyImage";
import OverlayCopy from "./OverlayCopy";

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <section className="relative overflow-hidden">
      <StickyImage imgUrl={imgUrl} />
      <OverlayCopy subheading={subheading} heading={heading} />
      <div className="relative z-10 bg-white px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">{children}</div>
      </div>
    </section>
  );
};

TextParallaxContent.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default TextParallaxContent;
