import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import { Image } from 'react-bootstrap';

import ParallaxText from '../general/ParallaxText';

import '../../assets/css/Stage.css';

import kevisual from '../../assets/images/kevisual.svg';
import image41 from '../../assets/images/image-41.png';
import stagecar from '../../assets/images/stage-car.svg';
import stagebg from '../../assets/images/stage-bg.svg';
import outlinecar from '../../assets/images/car-outlines.svg';

function Stage({ props }) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Move background left/right based on scroll direction
    const bgX = useTransform(scrollYProgress, [0, 1], ["-100%", "-20%"]);

    // Scale down foreground car slightly
    const carScale = useTransform(scrollYProgress, [0, 0.2], [3, 1.5]);

    return (
        <>        
        <div ref={containerRef} className="relative w-full h-[300vh]">
            {/* Parallax Section - Sticky Effect */}
            <motion.div
                className="fixed top-0 left-0 h-screen w-full flex overflow-hidden"
            >
                {/* Background Image - Moves sideways */}
                <motion.div className="absolute inset-0 z-0" style={{ x: bgX }}>
                    <Image src={stagebg} alt="Background" className="bgimg w-full h-full object-cover" />
                </motion.div>

                {/* Foreground Car - Zooms out */}
                <motion.div className="absolute inset-0 flex z-10" style={{ scale: carScale }}>
                    <Image src={stagecar} alt="Car" className="carimg w-auto h-auto" />
                </motion.div>
            </motion.div>

            {/* Outlined Car */}
            <div className={`h-[200vh] transition-opacity duration-500`}>
                <Image src={outlinecar} alt="Outlined Car" className="outlinecar" />
            </div>
        </div>

        <section className="my-5" style={{ whiteSpace: "nowrap" }}>
            <ParallaxText baseVelocity={-5}>
                {/*<Image src={kevisual} style={{ height: "4rem" }} className="kevisual" />*/}
                <span style={{color: "#882F31" }}>AEVORA</span>
            </ParallaxText>
            <ParallaxText baseVelocity={5}>
                {/*<Image src={kevisual} style={{ height: "4rem" }} className="kevisual" />*/}
                <span style={{color: "#C83D00" }}>REVOLUTION OF DRIVING</span>
            </ParallaxText>
        </section>
        </>
    );
}

export default Stage;