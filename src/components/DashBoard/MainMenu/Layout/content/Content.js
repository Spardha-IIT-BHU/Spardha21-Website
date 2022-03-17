import React from 'react';
import classNames from 'classnames';
import { Container } from 'reactstrap';
import { Outlet } from 'react-router';
import './Content.css';
// import { Switch, Route } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Topbar from './Topbar';

const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container
    fluid
    className={classNames('content_db', { 'is-open': sidebarIsOpen })}
  >
    <Topbar toggleSidebar={toggleSidebar} />
    <Outlet />
  </Container>
);

export default Content;
