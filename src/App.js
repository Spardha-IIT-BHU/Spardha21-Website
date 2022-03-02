import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Events from "./components/Events/Events";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Router>
      <div>Contact Us</div>
    </>
  );
}

export default App;
