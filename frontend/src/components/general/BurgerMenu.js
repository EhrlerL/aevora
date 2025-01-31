import { useState } from 'react';
import { Button, Nav, Offcanvas, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import menuicon from '../../assets/icons/menu.svg';

function BurgerMenu({ props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        {/* button to open offcanvas */}
        <img src={menuicon} onClick={handleShow} id="burgermenu" />

        {/* offcanvas */}
        <Offcanvas show={show} onHide={handleClose} placement="end" id="offcanvas">
            <Offcanvas.Header>
                <Offcanvas.Title>navigation menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Row className="mb-3">
                    <NavLink to="/" onClick={handleClose}>home</NavLink>
                </Row>
                <Row>
                    <NavLink to="/showroom" onClick={handleClose}>showroom</NavLink>
                </Row>
            </Offcanvas.Body>
        </Offcanvas>
    </>
  );
}

export default BurgerMenu;