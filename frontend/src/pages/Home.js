import { Col, Container, Row } from 'react-bootstrap';

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