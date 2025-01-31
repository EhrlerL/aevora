import { Col, Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import '../../assets/css/Navibar.css';
import logo_banner from '../../assets/images/logo-banner.svg';
import BurgerMenu from './BurgerMenu';

function Navibar({props}) {

    return (
        <Navbar id="navibar" fixed="top">
            <Col>
            </Col>
            <Col>
                <Container>
                    <Navbar.Brand>
                        <NavLink to="/">
                            <img src={logo_banner} alt="logo" id="logo" />
                        </NavLink>
                    </Navbar.Brand>
                </Container>
            </Col>
            <Col className="d-flex align-items-center justify-content-end me-3">
                <BurgerMenu />
            </Col>
        </Navbar>
    );
}

export default Navibar;