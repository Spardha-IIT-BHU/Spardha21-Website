import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { FaAlignLeft } from 'react-icons/fa';
import { Navbar, Button } from 'reactstrap';
// import { Link } from "react-router-dom";
import './Topbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Topbar = ({ toggleSidebar }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    console.log('toggleOpen');
    setOpen(!open);
  };

  const token = localStorage.getItem('token');
  console.log('token', token);
  const baseUrl = 'https://api.spardha.co.in';

  const [user, setUser] = useState('');
  const [numevents, setNumEvents] = useState('10');

  useEffect(() => {
    axios
      .get(`${baseUrl}/auth/update/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        console.log('user data=', res.data);
        setUser(res.data);
        console.log('user', user);
      })
      .catch((err) => {
        console.log('error=', err);
      });

    axios
      .get(`${baseUrl}/teams/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        // console.log("numevents data=",res.data);
        setNumEvents(res.data.length);
        // console.log('numevents',numevents);
      })
      .catch((err) => {
        console.log('error=', err);
        if (err.response.status === 404) {
          setNumEvents(0);
        }
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Navbar
      color="light"
      light
      className="navbar shadow-sm bg-white rounded"
      expand="md"
    >
      <div className="left_content">
        <Button color="info" onClick={toggleSidebar}>
          <FaAlignLeft className="mr-2" />
        </Button>
        <div className="col-xs-7 mine_lefts">
          <span className="events-reg hidden-xs">
            <h4 className="size_Correct">
              {' '}
              &ensp;Events Registered: {numevents}{' '}
            </h4>
          </span>
        </div>
      </div>

      <div className="row_db">
        <header>
          <div className="col-xs-5">
            <div className="header-rightside">
              <ul className="list-inline header-top pull-right">
                <li className="hidden-xs">
                  <Link to="/dashboard/registration" className="register-now">
                    Register Now
                  </Link>
                </li>
                <li className="dropdown">
                  <button className="dropdown-toggle" onClick={toggleOpen}>
                    <img src="/images/icons/user.png" alt="user" />
                    <b className="caret"></b>
                  </button>
                  <ul
                    className={open === true ? 'dropdown-menu' : 'closed_drp'}
                  >
                    <li>
                      <div className="navbar-content">
                        <span>{user.name}</span>
                        <p className="text-muted small">{user.email}</p>
                        <div className="divider"></div>
                        <Link
                          to="/dashboard/profile"
                          className="view_db btn-sm active profile_db"
                        >
                          View Profile
                        </Link>
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
