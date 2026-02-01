import styles from "../bubble.module.css";

const BubbleText = () => {
    return (
      <h2 className="cursor-pointer text-4xl md:text-6xl font-semibold">
        {"JoshColored".split("").map((child, idx) => (
          <span className={styles.hoverText} key={idx}>
            {child}
          </span>
        ))}
      </h2>
    );
  };

export default BubbleText;

