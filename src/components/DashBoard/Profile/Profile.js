import React, { useState, useEffect } from 'react';
import './Profile.css';
import axios from 'axios';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';
toast.configure();

const Profile = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  console.log('token', token);
  const baseUrl = 'https://api.spardha.co.in';

  const [user, setUser] = useState('');
  const [modal, setModal] = useState(false);
  // const [rel,setRel] =useState(true);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    // if(rel){
    //   console.log('rel',rel);
    //   // window.location.reload();
    //   setRel(false);
    // }
    // if (window.localStorage) {
    //   if (!localStorage.getItem('reload')) {
    //     localStorage['reload'] = true;
    //     setTimeout(window.location.reload(), 200);
    //   } else {
    //     localStorage.removeItem('reload');
    //   }
    // }

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

  const delSucceed = () => {
    console.log('delSucceed');
    localStorage.removeItem('token');
    navigate('/');
  };

  const deleteProfile = async () => {
    console.log('delete');
    await axios
      .get(`${baseUrl}/auth/delete/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        console.log('delete', res);
        toggle();
        toast.success('Profile Deleted Successfully', {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        setTimeout(delSucceed, 2000);
        // localStorage.removeItem('token');
        // window.location.href='/';
      })
      .catch((err) => {
        console.log('error', err);
        toggle();
        toast.error('Error in Deleting Profile', {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };

  const changePass = () => {
    console.log('change');
    localStorage.removeItem('token');
    navigate('/register/forgot');
  };

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
                    <td className="right-column overHandle">{user.username}</td>
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
                        onClick={changePass}
                      >
                        Change&nbsp;Password
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
                        onClick={toggle}
                      >
                        Delete&nbsp;Profile
                      </button>
                    </td>
                  </tr>
                </table>

                <Modal isOpen={modal} toggle={toggle} size="lg">
                  <ModalHeader
                    toggle={toggle}
                    style={{ backgroundColor: 'red', color: 'white' }}
                  >
                    Delete Profile
                  </ModalHeader>
                  <ModalBody>
                    <p style={{ fontWeight: 'bold' }}>
                      Are you sure u want to delete your profile??
                    </p>
                    <div className="confirmButtons">
                      <button className="yes" onClick={deleteProfile}>
                        Yes
                      </button>
                      <button className="no" onClick={toggle}>
                        No
                      </button>
                    </div>
                  </ModalBody>
                </Modal>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
