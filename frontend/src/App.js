import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SidebarSearchField from "./Components/Sidebar";
import GoogleMapComponent from "./Components/GoogleMapComponent";
import MainPage from "./Components/MainPage";

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
        <MainPage />
      </div>
    </Router>
  )
}

export default App;
