import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import SidebarSearchField from "./Components/Sidebar";

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
        <body>
          <div className="sidebar-search-field">
            <SidebarSearchField />
          </div>
        </body>
      </div>
    </Router>
  )
}

export default App;
