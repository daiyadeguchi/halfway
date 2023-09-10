import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import SidebarSearchField from "./Components/Sidebar";
import GoogleMapComponent from "./Components/GoogleMapComponent";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar>
            <Container>
              <Navbar.Brand>
                <Link to={"/"} className="nav-link">
                  HALFWAY<br/>Meet Your Friend at Halfway Point
                </Link>
              </Navbar.Brand>
            </Container>
          </Navbar>
        </header>
        <div className="d-flex mvh-100">
          <div className="w-25">
            <SidebarSearchField />
          </div>
          <div className="google-map-content w-75">
            <GoogleMapComponent />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App;
