import React,{ useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  Button,
  // NavbarToggler,
  // Collapse,
  // Nav,
  // NavItem,
  // NavLink,
} from "reactstrap";
// import { Link } from "react-router-dom";
import "./Topbar.css"
import "bootstrap/dist/css/bootstrap.min.css";

const Topbar = ({ toggleSidebar }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    console.log("toggleOpen");
    setOpen(!open);
  }

  return (
    <Navbar
      color="light"
      light
      className="navbar shadow-sm p-3 mb-5 bg-white rounded"
      expand="md"
    >
      <div className="left_content">
        <Button color="info" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faAlignLeft} />
        </Button>
        <div className="col-xs-7 mine_lefts">
            <span className="events-reg hidden-xs"><h4> &ensp;Events Registered: 32 </h4></span>
        </div>
      </div>


      <div className="row_db">
                    <header>
                        
                        <div className="col-xs-5">
                            <div className="header-rightside">
                                <ul className="list-inline header-top pull-right">
                                    <li className="hidden-xs"><a href="/dashboard/registration" className="register-now">Register Now</a></li>
                                    <li className="dropdown">
                                        <button className="dropdown-toggle" onClick={toggleOpen}><img src="/images/icons/user.png" alt="user"/>
                                            <b className="caret"></b></button>
                                        <ul className={open===true ? "dropdown-menu" : "closed_drp"}>
                                            <li>
                                                <div className="navbar-content">
                                                    <span>Ashish Kumar</span>
                                                    <p className="text-muted small">
                                                        ashishkumar.cse18@itbhu.ac.in
                                                    </p>
                                                    <div className="divider">
                                                    </div>
                                                    <a href="/dashboard/profile" className="view_db btn-sm active profile_db">View Profile</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                          </ul>
                      </div>
                  </div>
              </header>
          </div>
      
    </Navbar>
  );
};

export default Topbar;
