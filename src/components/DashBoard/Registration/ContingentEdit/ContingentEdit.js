import React from 'react';
import { useState, useEffect } from 'react';
import {
  // Alert,
  Form,
  FormGroup,
  Input,
  // FormFeedback,
  // InputGroup,
  // InputGroupText,
  // Label,
  // Button,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContingentEdit.css';
import axios from 'axios';

const ContingentEdit = () => {
  // const [contdetails,setContDetails] = useState('');
  const token = localStorage.getItem('token');
  const baseUrl = 'https://api.spardha.co.in';

  const rep = JSON.stringify(localStorage.getItem('College_Rep'));
  // console.log('rep=',rep);
  // console.log('type=',typeof rep);

  const [input, setInput] = useState({
    num_of_boys: '',
    num_of_girls: '',
    officials: '',
    leader_name: '',
    leader_contact_num: '',
    college_rep: JSON.parse(rep),
  });

  useEffect(() => {
    console.log('input=', input);
    axios
      .get(`${baseUrl}/teams/contingent/details/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        console.log('contdetails data=', res.data);
        setInput(res.data);
        // console.log('input=',input);
      })
      .catch((err) => {
        console.log('error=', err);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cancelButton = () => {
    console.log('cancel');
    // redirect to registration page
    window.location.href = '/dashboard/registration';
  };

  const submitButton = () => {
    console.log('submit', input);
    if (
      input.num_of_boys === '' ||
      input.num_of_girls === '' ||
      input.leader_name === '' ||
      input.leader_contact_num === ''
    ) {
      console.log('wrong input');
    } else {
      axios
        .delete(`${baseUrl}/teams/contingent/details/`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((res) => {
          console.log('deleted');
          const passed = input;

          passed['num_of_boys'] = parseInt(passed['num_of_boys']);
          passed['num_of_girls'] = parseInt(passed['num_of_girls']);
          passed['officials'] = parseInt(passed['officials']);
          passed['college_rep'] = JSON.parse(rep);

          console.log('passed', passed);

          axios
            .post(`${baseUrl}/teams/contingent/details/`, passed, {
              headers: {
                Authorization: `Token ${token}`,
              },
            })
            .then((res) => {
              console.log('successful');
              window.location.href = '/dashboard/registration';
            })
            .catch((err) => {
              console.log('error');
            });
        })
        .catch((err) => {
          console.log('error=', err);
        });
    }
  };

  const inputChangeHandler = async (e) => {
    // console.log("e in form", e.target.value);
    const newInput = { ...input };
    newInput[e.target.name] = e.target.value;
    setInput(newInput);
    //console.log('event=', e.target.value)
  };

  return (
    <div className="user-dashboard cont_Pad">
      <div className="row_dbContingent">
        <div className="col-xs-12 gutter widthAdjust">
          <div className="welcome-text">
            <div className="text-justify">
              <h2>
                <Form>
                  <table
                    align="center"
                    cellpadding="20"
                    className="profile-table"
                  >
                    <tr>
                      <td className="left-column" style={{ textAlign: 'left' }}>
                        Total Number of Boys :{' '}
                      </td>
                      <td className="right-column" width="30%">
                        <FormGroup>
                          <Input
                            type="number"
                            className="form-control_contDb"
                            id="num_of_boys"
                            name="num_of_boys"
                            placeholder="Enter total no. of Boys"
                            value={input.num_of_boys}
                            onChange={(e) => {
                              inputChangeHandler(e);
                            }}
                          />
                        </FormGroup>
                      </td>
                    </tr>

                    <tr>
                      <td className="left-column" style={{ textAlign: 'left' }}>
                        Total Number of Girls :{' '}
                      </td>
                      <td className="right-column" width="30%">
                        <FormGroup>
                          <Input
                            type="number"
                            className="form-control_contDb"
                            id="num_of_girls"
                            name="num_of_girls"
                            placeholder="Enter total no. of Girls"
                            value={input.num_of_girls}
                            onChange={(e) => {
                              inputChangeHandler(e);
                            }}
                          />
                        </FormGroup>
                      </td>
                    </tr>
                    <tr>
                      <td className="left-column" style={{ textAlign: 'left' }}>
                        Total Number of officials accompanying the contingent :{' '}
                      </td>
                      <td className="right-column" width="30%">
                        <FormGroup>
                          <Input
                            type="number"
                            className="form-control_contDb"
                            id="officials"
                            name="officials"
                            placeholder="Enter total no. of Officials"
                            value={input.officials}
                            onChange={(e) => {
                              inputChangeHandler(e);
                            }}
                          />
                        </FormGroup>
                      </td>
                    </tr>
                    <tr>
                      <td className="left-column" style={{ textAlign: 'left' }}>
                        Full Name of Contingent Leader{' '}
                        <span style={{ color: 'red' }}>*</span> :{' '}
                      </td>
                      <td className="right-column" width="30%">
                        <FormGroup>
                          <Input
                            type="text"
                            className="form-control_contDb"
                            id="leader_name"
                            name="leader_name"
                            placeholder="Enter the name of Contingent Leader"
                            value={input.leader_name}
                            onChange={(e) => {
                              inputChangeHandler(e);
                            }}
                          />
                        </FormGroup>
                      </td>
                    </tr>
                    <tr>
                      <td className="left-column" style={{ textAlign: 'left' }}>
                        Contact Number of Contingent Leader{' '}
                        <span style={{ color: 'red' }}>*</span> :{' '}
                      </td>
                      <td className="right-column" width="30%">
                        <FormGroup>
                          <Input
                            type="text"
                            className="form-control_contDb"
                            id="leader_contact_num"
                            name="leader_contact_num"
                            placeholder="Enter the phone number of Contingent Leader"
                            value={input.leader_contact_num}
                            onChange={(e) => {
                              inputChangeHandler(e);
                            }}
                          />
                        </FormGroup>
                      </td>
                    </tr>
                    <tr>
                      <td className="left-column"></td>
                      <td
                        className="right-column"
                        style={{ color: 'red', fontSize: '15px' }}
                      >
                        <div id="error-reg-edit"></div>
                      </td>
                    </tr>
                  </table>
                </Form>
                <table
                  align="center"
                  cellpadding="20"
                  className="profile-table"
                >
                  <tr className="mine_contDb">
                    <td>
                      <button
                        onClick={cancelButton}
                        className="register-now"
                        style={{ marginRight: '0' }}
                      >
                        Cancel
                      </button>
                    </td>
                    <td>
                      {' '}
                      <button onClick={submitButton} className="register-now">
                        Submit
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

export default ContingentEdit;
