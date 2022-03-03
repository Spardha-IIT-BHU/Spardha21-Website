import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Events from "./components/Events/Events";
import Header from "./components/Header/Header";
// import Sponsors from "./components/Sponsors/Sponsors";
// import Gallery from "./components/Gallery/Gallery";
import Team from "./components/Team/Team";

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
          {/* <Route path="/sponsors" element={<Sponsors />} /> */}
          {/* <Route path="/gallery" element={<Gallery />} /> */}
          <Route path="/team" element={<Team />} />
        </Routes>
      </Router>
      <div>Contact Us</div>
    </>
  );
}

export default App;
