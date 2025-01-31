import { Col, Container, Row } from 'react-bootstrap';

import '../../assets/css/Intro.css';

function Intro({ props }) {

    return (
        <div className="intro-wrapper">
            <div className="image"></div>
            <Container className="lvl1">
                <Container className="lvl2">
                    <Container className="text">
                        <Row className="mb-4">
                            <Col>
                                <h1>Feel the Revolution of Driving</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>
                                Welcome to AEVORA – where innovation meets elegance. We redefine the driving experience by combining cutting-edge technology, sustainable engineering, and timeless design. Explore our vision for a cleaner, smarter, and more exciting future of mobility.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Container>
        </div>
    );
}

export default Intro;