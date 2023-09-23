import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainPage from "./Components/MainPage";
import Registar from "./Components/Register";

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
        <Routes>
          <Route exact path="/" element={<Registar />} />
          <Route path="/:id" element={<MainPage />} />
          <Route path="add-user/:id" element={<Registar />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
