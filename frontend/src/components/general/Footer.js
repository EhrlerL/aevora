import { Col, Container, Image, Row } from 'react-bootstrap';

import '../../assets/css/Footer.css';

import logobanner from '../../assets/images/logo-banner.svg';

function Footer({ props }) {
    return (
        <>
        <Container id="footer">
            <Row>
                <Col xs={4} className="d-flex align-items-center">
                    <Container>
                        <Row>
                            <Col>
                                <Image src={logobanner} id="logoicon" fluid />
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col xs={4}>
                    <Container>
                        <Row>
                            <Col>AEVORA &copy; 2025</Col>
                        </Row>
                        <Row>
                            <Col>by <a href="https://jaredseanfiedler.cargo.site/" target="_blank">J S Fiedler</a> & L J Ehrler</Col>
                        </Row>
                        <Row>
                            <Col>all rights reserved.</Col>
                        </Row>
                    </Container>
                </Col>
                <Col xs={4}>
                </Col>
            </Row>
            
        </Container>
        </>
    );
}

export default Footer;