import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";

import '../../assets/css/ParallaxText.css';

function ParallaxLogo({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [repeatCount, setRepeatCount] = useState(4); // Default count

  useEffect(() => {
    const updateRepeatCount = () => {
      if (containerRef.current && textRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const textWidth = textRef.current.offsetWidth;
        if (textWidth > 0) {
          setRepeatCount(Math.ceil(containerWidth / textWidth) + 5); // Extra to avoid gaps
        }
      }
    };

    updateRepeatCount();
    window.addEventListener("resize", updateRepeatCount);
    return () => window.removeEventListener("resize", updateRepeatCount);
  }, []);

  // Dynamically adjust the wrapping range
  const x = useTransform(baseX, (v) => `${wrap(-100 / repeatCount, -100, v)}%`);

  const directionFactor = useRef(1);
  
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax" ref={containerRef}>
      <motion.div className="scroller" style={{ x }}>
    {[...Array(repeatCount * 2)].map((_, i) => (
      <span key={i} ref={i === 0 ? textRef : null}>
        {children}&nbsp;
      </span>
    ))}
  </motion.div>
    </div>
  );
}

export default ParallaxLogo;