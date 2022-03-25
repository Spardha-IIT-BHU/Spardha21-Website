import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { isMobile } from 'react-device-detect';
import { useNavigate } from 'react-router';

import SideBar from './Layout/sidebar/SideBar';
import Content from './Layout/content/Content';
import './DashBoard.css';

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('token')) navigate('/register/signup');
  }, [navigate]);

  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  useEffect(() => {
    console.log('mobile=', isMobile);
    if (isMobile) {
      setSidebarOpen(false);
    }
  }, []);

  return (
    // <Router>
    <div className="Db wrapper">
      <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
      <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
    </div>
    // </Router>
  );
};

export default App;
