import React, { useState } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from 'reactstrap';
import styles from './Header.module.css';

function Header() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prevState) => {
      return prevState ^ 1;
    });
  };

  return (
    <>
      <Navbar expand="lg" className={styles['wrap-container']} sticky="top">
        <NavbarBrand>
          <NavHashLink exact="true" to="/#home-slider" smooth>
            <img
              src="/images/logo/spardha-logo-white.png"
              alt="Sparhda Logo"
              height="60px"
            />
          </NavHashLink>
        </NavbarBrand>
        <NavbarToggler
          className={styles['navbar-toggler']}
          onClick={toggle}
        ></NavbarToggler>
        <Collapse navbar isOpen={open}>
          <Nav navbar className={`ms-auto ${styles['navbar-nav']}`}>
            <NavItem className={styles['nav-items']}>
              <NavHashLink
                exact="true"
                to="/#home-slider"
                className={styles['nav-links']}
                onClick={() => {
                  setOpen(false);
                }}
                style={({ isActive }) => {
                  return {
                    color: isActive ? '#6db549' : 'white',
                  };
                }}
                smooth
              >
                Home
              </NavHashLink>
            </NavItem>
            <NavItem className={styles['nav-items']}>
              <NavHashLink
                exact="true"
                to="/about#about"
                className={styles['nav-links']}
                onClick={() => {
                  setOpen(false);
                }}
                style={({ isActive }) => {
                  return {
                    color: isActive ? '#6db549' : 'white',
                  };
                }}
                smooth
              >
                About us
              </NavHashLink>
            </NavItem>
            <NavItem className={styles['nav-items']}>
              <NavHashLink
                exact="true"
                to="/events#events"
                className={styles['nav-links']}
                onClick={() => {
                  setOpen(false);
                }}
                style={({ isActive }) => {
                  return {
                    color: isActive ? '#6db549' : 'white',
                  };
                }}
                smooth
              >
                Events
              </NavHashLink>
            </NavItem>
            <NavItem className={styles['nav-items']}>
              <NavHashLink
                exact="true"
                to="/rulebook"
                className={styles['nav-links']}
                onClick={() => {
                  setOpen(false);
                }}
                style={({ isActive }) => {
                  return {
                    color: isActive ? '#6db549' : 'white',
                  };
                }}
                smooth
              >
                RuleBook
              </NavHashLink>
            </NavItem>
            <NavItem className={styles['nav-items']}>
              <NavHashLink
                exact="true"
                to="/guests#guests"
                className={styles['nav-links']}
                onClick={() => {
                  setOpen(false);
                }}
                style={({ isActive }) => {
                  return {
                    color: isActive ? '#6db549' : 'white',
                  };
                }}
                smooth
              >
                Guests
              </NavHashLink>
            </NavItem>
            <NavItem className={styles['nav-items']}>
              <NavHashLink
                exact="true"
                to="/sponsors#sponsors"
                className={styles['nav-links']}
                onClick={() => {
                  setOpen(false);
                }}
                style={({ isActive }) => {
                  return {
                    color: isActive ? '#6db549' : 'white',
                  };
                }}
                smooth
              >
                Sponsors
              </NavHashLink>
            </NavItem>
            <NavItem className={styles['nav-items']}>
              <NavHashLink
                exact="true"
                to="/gallery#gallery"
                className={styles['nav-links']}
                onClick={() => {
                  setOpen(false);
                }}
                style={({ isActive }) => {
                  return {
                    color: isActive ? '#6db549' : 'white',
                  };
                }}
                smooth
              >
                Gallery
              </NavHashLink>
            </NavItem>
            <NavItem className={styles['nav-items']}>
              <NavHashLink
                exact="true"
                to="/team#team"
                className={styles['nav-links']}
                onClick={() => {
                  setOpen(false);
                }}
                style={({ isActive }) => {
                  return {
                    color: isActive ? '#6db549' : 'white',
                  };
                }}
                smooth
              >
                Our Team
              </NavHashLink>
            </NavItem>
            <NavItem className={styles['nav-items']}>
              <NavHashLink
                exact="true"
                to="/#contactus"
                className={styles['nav-links']}
                onClick={() => {
                  setOpen(false);
                }}
                smooth
              >
                Contact Us
              </NavHashLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default Header;
