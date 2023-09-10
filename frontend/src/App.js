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
        <header className="App-header bg-dark">
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
        <div className="d-flex mvh-100 bg-dark align-items-center">
          <div className="w-25">
            <SidebarSearchField />
          </div>
          <div className="w-75">
            <GoogleMapComponent />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App;
