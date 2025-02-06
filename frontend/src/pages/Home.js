import { Col, Container, Row } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import Stage from '../components/home/Stage';
import Intro from '../components/home/Intro';
import '../assets/css/Stage.css';

function Home({ props }) {
    

    return (
        <>
            <Stage />
            <Intro />
        </>
    );
}

export default Home;