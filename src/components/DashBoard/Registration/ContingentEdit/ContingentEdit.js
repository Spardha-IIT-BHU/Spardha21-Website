import React from 'react';
import { useState } from 'react';
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

const ContingentEdit = () => {
  const cancelButton = () => {
    console.log('cancel');
    // redirect to registration page
    window.location.href = '/dashboard/registration';
  };

  const submitButton = () => {
    console.log('submit');
  };

  const [input, setInput] = useState({
    boys: '',
    girls: '',
    officials: '',
    contingent_leader: '',
    contingent_phone: '',
  });

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
                            id="boys"
                            name="boys"
                            placeholder="Enter total no. of Boys"
                            value={input.boys}
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
                            id="girls"
                            name="girls"
                            placeholder="Enter total no. of Girls"
                            value={input.girls}
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
                            id="contingent_leader"
                            name="contingent_leader"
                            placeholder="Enter the name of Contingent Leader"
                            value={input.contingent_leader}
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
                            id="contingent_phone"
                            name="contingent_phone"
                            placeholder="Enter the phone number of Contingent Leader"
                            value={input.contingent_phone}
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
