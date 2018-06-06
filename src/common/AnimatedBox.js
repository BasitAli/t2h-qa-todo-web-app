import posed from "react-pose";

const config = {
  visible: { translateY: 0 },
  hidden: { translateY: -500 }
};

const AnimatedBox = posed.div(config);

export default AnimatedBox;
