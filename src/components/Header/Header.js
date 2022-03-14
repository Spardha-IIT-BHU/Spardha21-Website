import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
          <NavLink to="/">
            <img
              src="/images/logo/spardha-logo-white.png"
              alt="Sparhda Logo"
              height="60px"
            />
          </NavLink>
        </NavbarBrand>
        <NavbarToggler
          className={styles['navbar-toggler']}
          onClick={toggle}
        ></NavbarToggler>
        <Collapse navbar isOpen={open}>
          <Nav navbar className={`ms-auto ${styles['navbar-nav']}`}>
            <NavItem className={styles['nav-items']}>
              <NavLink
                to="/"
                className={styles['nav-links']}
                onClick={() => {
                  setOpen(false);
                }}
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem className={styles['nav-items']}>
              <NavLink
                to="/about"
                className={styles['nav-links']}
                onClick={() => {
                  setOpen(false);
                }}
              >
                About us
              </NavLink>
            </NavItem>
            <NavItem className={styles['nav-items']}>
              <NavLink
                to="/events"
                className={styles['nav-links']}
                onClick={() => {
                  setOpen(false);
                }}
              >
                Events
              </NavLink>
            </NavItem>
            <NavItem className={styles['nav-items']}>
              <NavLink
                to="/"
                className={styles['nav-links']}
                onClick={() => {
                  setOpen(false);
                }}
              >
                RuleBook
              </NavLink>
            </NavItem>
            <NavItem className={styles['nav-items']}>
              <NavLink
                to="/guests"
                className={styles['nav-links']}
                onClick={() => {
                  setOpen(false);
                }}
              >
                Guests
              </NavLink>
            </NavItem>
            <NavItem className={styles['nav-items']}>
              <NavLink
                to="/sponsors"
                className={styles['nav-links']}
                onClick={() => {
                  setOpen(false);
                }}
              >
                Sponsors
              </NavLink>
            </NavItem>
            <NavItem className={styles['nav-items']}>
              <NavLink
                to="/gallery"
                className={styles['nav-links']}
                onClick={() => {
                  setOpen(false);
                }}
              >
                Gallery
              </NavLink>
            </NavItem>
            <NavItem className={styles['nav-items']}>
              <NavLink
                to="/team"
                className={styles['nav-links']}
                onClick={() => {
                  setOpen(false);
                }}
              >
                Our Team
              </NavLink>
            </NavItem>
            <NavItem className={styles['nav-items']}>
              <NavLink
                to="/"
                className={styles['nav-links']}
                onClick={() => {
                  setOpen(false);
                }}
              >
                Contact Us
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default Header;
