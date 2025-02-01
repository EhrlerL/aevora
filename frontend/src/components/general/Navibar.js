import { Col, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import '../../assets/css/Navibar.css';
import logo_banner from '../../assets/images/logo-banner.svg';
import BurgerMenu from './BurgerMenu';

function Navibar({props}) {

    return (
        <Navbar id="navibar" sticky="top" style={{ textDecoration: 'none' }}>
            <Nav style={{width: "100%"}}>
                <Col>
                    <NavLink to="/" className="navitem">HOME</NavLink>
                </Col>
                <Col>
                    <NavLink to="/models" className="navitem">MODELS</NavLink>
                </Col>
                <Col>
                    <Navbar.Brand>
                        <NavLink to="/">
                            <img src={logo_banner} alt="logo" id="logo" />
                        </NavLink>
                    </Navbar.Brand>
                </Col>
                <Col>
                    <NavLink to="/about" className="navitem">ABOUT US</NavLink>
                </Col>
                <Col>
                    <NavLink to="/booking" className="navitem">BOOK NOW</NavLink>
                </Col>
                {/*<Col className="d-flex align-items-center justify-content-end me-3">
                    <BurgerMenu />
                </Col>*/}
            </Nav>
        </Navbar>
    );
}

export default Navibar;