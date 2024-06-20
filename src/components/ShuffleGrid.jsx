import { useEffect,  useState } from "react";
import { motion } from "framer-motion";
import bgImage1 from "../assets/programming.png";
import bgImage2 from "../assets/apache.png";
import bgImage3 from "../assets/code.png";
import bgImage4 from "../assets/coding-language.png";
import bgImage5 from "../assets/github.png";
import bgImage6 from "../assets/html.png";
import bgImage7 from "../assets/ionic.png";
import bgImage8 from "../assets/linux.png";
import bgImage9 from "../assets/typescript.png";
import bgImage10 from "../assets/visualstudio.png";
import bgImage11 from "../assets/cakephp.png";
import bgImage12 from "../assets/java-script.png";
import bgImage13 from "../assets/webpack.png";
import bgImage14 from "../assets/yarn.png";
import bgImage15 from "../assets/ssh.png";
import bgImage16 from "../assets/physics.png";

const squareData = [
    {
        id: 1,
    
        src: bgImage1,
      },
    
      {
        id: 2,
    
        src: bgImage2,
      },
    
      {
        id: 3,
    
        src: bgImage3,
      },
    
      {
        id: 4,
    
        src: bgImage4,
      },
    
      {
        id: 5,
    
        src: bgImage5,
      },
    
      {
        id: 6,
    
        src: bgImage6,
      },
    
      {
        id: 7,
    
        src: bgImage7,
      },
    
      {
        id: 8,
    
        src: bgImage8,
      },
    
      {
        id: 9,
    
        src: bgImage9,
      },
    
      {
        id: 10,
    
        src: bgImage10,
      },
    
      {
        id: 11,
    
        src: bgImage11,
      },
    
      {
        id: 12,
    
        src: bgImage12,
      },
    
      {
        id: 13,
    
        src: bgImage13,
      },
    
      {
        id: 14,
    
        src: bgImage14,
      },
    
      {
        id: 15,
    
        src: bgImage15,
      },
    
      {
        id: 16,
    
        src: bgImage16,
      },
];

const ShuffleGrid = () => {
  const [shuffledSquares, setShuffledSquares] = useState(squareData);

  useEffect(() => {
    const interval = setInterval(() => {
      setShuffledSquares((prevSquares) => {
        const shuffled = [...prevSquares];
        const index1 = Math.floor(Math.random() * shuffled.length);
        let index2 = Math.floor(Math.random() * shuffled.length);
        while (index1 === index2) {
          index2 = Math.floor(Math.random() * shuffled.length);
        }
        [shuffled[index1], shuffled[index2]] = [
          shuffled[index2],
          shuffled[index1],
        ];
        return shuffled;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[300px] m-[-10px] gap-1 md:h-[450px]">
      {shuffledSquares.map((square) => (
        <motion.div
        key={square.id}
        layout
        transition={{ duration: 1.5, type: "spring" }}
        className="w-full h-full"
        style={{
          backgroundImage: `url(${square.src})`,
          backgroundSize: "cover",
        }}
      ></motion.div>
      ))}
    </div>
  );
};

export default ShuffleGrid;
