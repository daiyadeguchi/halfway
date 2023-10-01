import { useState } from "react";
import SidebarSearchField from "./Sidebar";
import GoogleMapComponent from "./GoogleMapComponent";
import { Navbar, Container, Offcanvas, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainPage = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <header className="bg-dark">
        <Navbar className="w-100 mx-3">
          <Button variant="outline-light" onClick={handleShow}>=</Button>
          <Container className="nav-link d-flex justify-content-center">
            <Navbar.Brand>
              <Link to={"/"} className="text-white">
                HALFWAY<br/>Meet Your Friend at Halfway Point
              </Link>
            </Navbar.Brand>
          </Container>
        </Navbar>
      </header>
      <Offcanvas show={show} onHide={handleClose} className="w-50 d-flex bg-dark align-items-center">
        <Offcanvas.Header closeButton className="text-white">
          <Offcanvas.Title>User Location</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="w-100">
          <div className="d-flex justify-content-center bg-dark">
            <SidebarSearchField />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      
      <div className="w-100">
        <GoogleMapComponent />
      </div>
    </div>
  )
}

export default MainPage;