import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./Components/MainPage";
import Registar from "./Components/Register";
import AddUser from "./Components/AddUser";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Registar />} />
          <Route path="/:id" element={<MainPage />} />
          <Route path="add-user/:id" element={<AddUser />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
