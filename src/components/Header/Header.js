import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from "reactstrap";
import styles from "./Header.module.css";

function Header() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prevState) => {
      return prevState ^ 1;
    });
  };

  return (
    <>
      <Navbar dark expand="lg" className={styles["wrap-container"]}>
        <NavbarBrand>
          <NavLink exact to="/">
            <img
              src="/images/spardha-logo-white.png"
              alt="Sparhda Logo"
              height="60px"
            />
          </NavLink>
        </NavbarBrand>
        <NavbarToggler
          className={styles["navbar-toggler"]}
          onClick={toggle}
        ></NavbarToggler>
        <Collapse navbar isOpen={open}>
          <Nav navbar className={`ms-auto ${styles["navbar-nav"]}`}>
            <NavItem className={styles["nav-items"]}>
              <NavLink exact to="/" className={styles["nav-links"]}>
                Home
              </NavLink>
            </NavItem>
            <NavItem className={styles["nav-items"]}>
              <NavLink exact to="/about" className={styles["nav-links"]}>
                About us
              </NavLink>
            </NavItem>
            <NavItem className={styles["nav-items"]}>
              <NavLink exact to="/events" className={styles["nav-links"]}>
                Events
              </NavLink>
            </NavItem>
            <NavItem className={styles["nav-items"]}>
              <NavLink exact to="/" className={styles["nav-links"]}>
                RuleBook
              </NavLink>
            </NavItem>
            <NavItem className={styles["nav-items"]}>
              <NavLink exact to="/" className={styles["nav-links"]}>
                Guests
              </NavLink>
            </NavItem>
            <NavItem className={styles["nav-items"]}>
              <NavLink exact to="/sponsors" className={styles["nav-links"]}>
                Sponsors
              </NavLink>
            </NavItem>
            <NavItem className={styles["nav-items"]}>
              <NavLink exact to="/gallery" className={styles["nav-links"]}>
                Gallery
              </NavLink>
            </NavItem>
            <NavItem className={styles["nav-items"]}>
              <NavLink exact to="/" className={styles["nav-links"]}>
                Our Team
              </NavLink>
            </NavItem>
            <NavItem className={styles["nav-items"]}>
              <NavLink exact to="/" className={styles["nav-links"]}>
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
