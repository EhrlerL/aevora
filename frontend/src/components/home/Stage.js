import { useEffect } from 'react';

import { Image } from 'react-bootstrap';

import ParallaxText from '../general/ParallaxText';

import '../../assets/css/Stage.css';

import carside from '../../assets/images/car-side.svg';
import kevisual from '../../assets/images/kevisual.svg';
import image41 from '../../assets/images/image-41.png';

function Stage({ image1, image2, image3, ...props }) {

    return (
        <>
        <div>
            <div>
                <Image src={image41} className="bgimg" fluid />
            </div>
        </div>
        <section className="my-5" style={{ whiteSpace: "nowrap" }}>
            <ParallaxText baseVelocity={-5}>
                {/*<Image src={kevisual} style={{ height: "4rem" }} className="kevisual" />*/}
                AEVORA
            </ParallaxText>
            <ParallaxText baseVelocity={5}>
                {/*<Image src={kevisual} style={{ height: "4rem" }} className="kevisual" />*/}
                REVOLUTION OF DRIVING
            </ParallaxText>
        </section>
        </>
    );
}

export default Stage;