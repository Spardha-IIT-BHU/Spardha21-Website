import React, { useState, useEffect } from 'react';
import './Profile.css';
import axios from 'axios';

const Profile = () => {
  const token = localStorage.getItem('token');
  console.log('token', token);
  const baseUrl = 'https://api.spardha.co.in';

  const [user, setUser] = useState('');

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="user-dashboard profile_Pad">
      <div className="row_dbProfile">
        <div className="col-xs-12 gutter widthAdjust">
          <div className="welcome-text" style={{ lineHeight: '1' }}>
            <div className="text-justify">
              <h2>
                {/* <div style={{textAlign: right}}><a href="profile.php?mode=edit">Edit</a></div> */}
                <table
                  align="center"
                  cellpadding="20"
                  className="profile-table"
                >
                  <tr>
                    <td className="left-column">Name: </td>
                    <td className="right-column overHandle">{user.name}</td>
                  </tr>
                  <tr>
                    <td className="left-column">Email: </td>
                    <td className="right-column overHandle">{user.email}</td>
                  </tr>
                  <tr>
                    <td className="left-column">Username: </td>
                    <td className="right-column overHandle">ashishkumar</td>
                  </tr>
                  <tr>
                    <td className="left-column">Designation: </td>
                    <td className="right-column overHandle">
                      {user.designation}
                    </td>
                  </tr>
                  <tr>
                    <td className="left-column">Institute Name: </td>
                    <td className="right-column overHandle">
                      {user.institution}
                    </td>
                  </tr>
                  <tr>
                    <td className="left-column">Phone Number: </td>
                    <td className="right-column overHandle"> {user.phone}</td>
                  </tr>
                  <tr>
                    <td className="left-column"></td>
                    <td className="right-column overHandle"></td>
                  </tr>
                  <tr className="mine_proDbs">
                    <td>
                      <button
                        href="#"
                        className="register-now"
                        data-toggle="modal"
                        data-target="#change_username"
                        style={{ marginRight: '0' }}
                      >
                        Change&nbsp;Username
                      </button>
                    </td>
                    <td>
                      <button
                        href="#"
                        className="register-now"
                        data-toggle="modal"
                        data-target="#change_password"
                        style={{
                          backgroundColor: 'red',
                          border: '1px solid red',
                        }}
                      >
                        Delete&nbsp;Profile
                      </button>
                    </td>
                  </tr>
                </table>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
