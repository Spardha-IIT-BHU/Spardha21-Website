import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Registration.css';
import Events from './Events/Events';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Registration = () => {
  const [contdetails, setContDetails] = useState({
    num_of_boys: '-',
    num_of_girls: '-',
    college_rep: '-',
    leader_name: '-',
    leader_contact_num: '-',
    num_of_officials: '-',
  });
  const token = localStorage.getItem('token');
  const baseUrl = 'https://api.spardha.co.in';

  useEffect(() => {
    axios
      .get(`${baseUrl}/teams/contingent/details/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        console.log('contdetails data=', res.data);
        setContDetails(res.data);
        console.log('contdetails', contdetails);
      })
      .catch((err) => {
        console.log('error=', err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="user-dashboard regn_Pad">
      <div className="row_dbRegistration">
        <div className="col-xs-12 gutter widthAdjust">
          <div className="welcome-text">
            {/* <div
              style={{ textAlign: 'center', fontSize: '15px', color: 'red' }}
            >
              <b>
                <u>NOTE:</u>
              </b>{' '}
              Enter the <b>number</b> of players in 'Athletics', whereas the{' '}
              <b>name</b> of players in other events.
            </div> */}
            <div className="text-justify">
              <h2>
                <br></br>
                <div style={{ textAlign: 'right' }}>
                  <Link
                    to="/dashboard/contingentEdit"
                    style={{ textDecoration: 'none' }}
                  >
                    Edit
                  </Link>
                </div>
                <div className="events-heading">CONTINGENT DETAILS</div>
                <table align="center" cellpadding="20" className="events-table">
                  <tr>
                    <td className="left-column" style={{ textAlign: 'left' }}>
                      <b>Total Number of Boys</b>{' '}
                    </td>
                    <td className="right-column">{contdetails.num_of_boys}</td>
                  </tr>
                  <tr>
                    <td className="left-column" style={{ textAlign: 'left' }}>
                      <b>Total Number of Girls</b>{' '}
                    </td>
                    <td className="right-column">{contdetails.num_of_girls}</td>
                  </tr>
                  <tr>
                    <td
                      className="left-column"
                      style={{ textAlign: 'left', lineHeight: '1.5' }}
                    >
                      <b>
                        Total Number of officials accompanying the contingent
                      </b>{' '}
                    </td>
                    <td className="right-column">
                      {contdetails.num_of_officials}
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="left-column"
                      style={{ textAlign: 'left', lineHeight: '1.5' }}
                    >
                      <b>Full Name of Contingent Leader</b>{' '}
                    </td>
                    <td className="right-column">{contdetails.leader_name}</td>
                  </tr>
                  <tr>
                    <td
                      className="left-column"
                      style={{ textAlign: 'left', lineHeight: '1.5' }}
                    >
                      <b>Contact Number of Contingent Leader</b>{' '}
                    </td>
                    <td className="right-column">
                      {contdetails.leader_contact_num}
                    </td>
                  </tr>
                </table>
                <br></br>
                <br></br>

                <div style={{ textAlign: 'right' }}>
                  <Link
                    to="/dashboard/events"
                    style={{ textDecoration: 'none' }}
                  >
                    Edit
                  </Link>
                </div>
                <Events />
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
