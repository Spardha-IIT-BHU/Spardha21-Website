import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Registration.css';
import EventsDb from './EventsDb/EventsDb';

const Registration = () => {
  return (
    <div className="user-dashboard regn_Pad">
      <div className="row_dbRegistration">
        <div className="col-xs-12 gutter widthAdjust">
          <div className="welcome-text">
            <div
              style={{ textAlign: 'center', fontSize: '15px', color: 'red' }}
            >
              <b>
                <u>NOTE:</u>
              </b>{' '}
              Enter the <b>number</b> of players in 'Aquatics' and 'Athletics',
              whereas the <b>name</b> of players in other events.
            </div>
            <div className="text-justify">
              <h2>
                <br></br>
                <div style={{ textAlign: 'right' }}>
                  <a href="/dashboard/contingentEdit">Edit</a>
                </div>
                <div className="events-heading">CONTINGENT DETAILS</div>
                <table align="center" cellpadding="20" className="events-table">
                  <tr>
                    <td className="left-column" style={{ textAlign: 'left' }}>
                      <b>Total Number of Boys</b>{' '}
                    </td>
                    <td className="right-column">10</td>
                  </tr>
                  <tr>
                    <td className="left-column" style={{ textAlign: 'left' }}>
                      <b>Total Number of Girls</b>{' '}
                    </td>
                    <td className="right-column">11</td>
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
                    <td className="right-column">12</td>
                  </tr>
                  <tr>
                    <td
                      className="left-column"
                      style={{ textAlign: 'left', lineHeight: '1.5' }}
                    >
                      <b>Full Name of Contingent Leader</b>{' '}
                    </td>
                    <td className="right-column">Ashish Kumar</td>
                  </tr>
                  <tr>
                    <td
                      className="left-column"
                      style={{ textAlign: 'left', lineHeight: '1.5' }}
                    >
                      <b>Contact Number of Contingent Leader</b>{' '}
                    </td>
                    <td className="right-column">123456789</td>
                  </tr>
                </table>
                <br></br>
                <br></br>

                <EventsDb />
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
