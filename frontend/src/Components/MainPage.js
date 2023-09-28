import { useState } from "react";
import SidebarSearchField from "./Sidebar";
import GoogleMapComponent from "./GoogleMapComponent";
import { Offcanvas, Button } from "react-bootstrap";

const MainPage = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>show</Button>
      <Offcanvas show={show} onHide={handleClose} className="w-50 d-flex bg-dark align-items-center">
        <Offcanvas.Header closeButton className="text-white">
          <Offcanvas.Title>Title</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex bg-dark align-items-center">
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