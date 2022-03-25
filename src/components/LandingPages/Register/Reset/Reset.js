import React from 'react';
import axios from 'axios';
import styles from '../Signup/Signup.module.css';
import {
  Alert,
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
} from 'reactstrap';
import { Link, useSearchParams } from 'react-router-dom';
import { FaKey, FaPaperPlane, FaUser } from 'react-icons/fa';
import { useReducer } from 'react';

function Reset() {
  const [searchParams] = useSearchParams();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatchToast({
      color: 'primary',
      message: 'Please wait while your request is being processed.',
    });

    if (password2.value !== password1.value) {
      dispatchPassword1(password1.value);
      dispatchPassword2(password2.value);
      dispatchToast({
        color: 'danger',
        message: 'Please fill out all the fields correctly',
      });
      return;
    }

    const token = searchParams.get('token');
    const uidb64 = searchParams.get('id');

    axios
      .patch('https://api.spardha.co.in/auth/password_reset/update_password/', {
        password: password1.value,
        token,
        uidb64,
      })
      .then((res) => {
        dispatchToast({
          color: 'success',
          message: res.data.message,
        });
        return;
      })
      .catch(({ response }) => {
        dispatchToast({
          color: 'danger',
          message: response.data[Object.keys(response.data)[0]].toString(),
        });
      });
  };

  const password1Reducer = (state, value) => {
    let warning = '';
    if (value === '') warning = 'This field is required.';
    else if (value.length < 6 || value.length > 30)
      warning = 'Password must be of length 6 - 30.';
    return { value, warning, valid: warning === '' && value !== '' };
  };

  const password2Reducer = (state, value) => {
    let warning = '';
    if (value === '') warning = 'This field is required.';
    else if (value !== password1.value) warning = 'Passwords do not match.';
    return { value, warning, valid: warning === '' && value !== '' };
  };

  const toastReducer = (state, action) => {
    return { color: action.color, message: action.message };
  };

  const [password1, dispatchPassword1] = useReducer(password1Reducer, {
    value: '',
    warning: '',
    valid: false,
  });

  const [password2, dispatchPassword2] = useReducer(password2Reducer, {
    value: '',
    warning: '',
    valid: false,
  });

  const [toast, dispatchToast] = useReducer(toastReducer, {
    color: 'primary',
    message: '',
  });

  return (
    <>
      <h3 className={`${styles.heading}`}> UPDATE PASSWORD </h3>
      <hr />

      <Alert
        color="success"
        style={{
          fontSize: '14px',
          fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif',
        }}
        className="py-2"
      >
        Click{' '}
        <Link to="/register/signup" style={{ textDecoration: 'none' }}>
          here{' '}
        </Link>{' '}
        to <strong>sign up</strong>
        <br />
        Click{' '}
        <Link to="/register/login" className="text-decoration-none">
          here{` `}
        </Link>
        to <strong>login</strong>
      </Alert>

      <div class="col-sm-12 text-end">
        <span
          style={{
            color: 'red',
            fontSize: '14px',
            fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif',
          }}
        >
          *&nbsp;Mandatory
        </span>
      </div>

      <Form className={`${styles['form-horizontal']}`}>
        <div
          className="col-sm-12 justify-content-center fw-bold d-flex flex-column"
          style={{ marginTop: '12px' }}
        >
          <div className={`${styles.panel}`}>
            <div className={`${styles['panel-heading']}`}>
              <h4
                className={`${styles['panel-title']} text-center`}
                style={{ color: '#59ba00' }}
              >
                <FaUser /> Login Details
              </h4>
            </div>

            <FormGroup className={`${styles['form-group']}`}>
              <div className="col-sm-12">
                <FormGroup className={`${styles['form-group']}`}>
                  <Label for="password1" className={`${styles.label}`}>
                    Password:&nbsp;
                    <span style={{ color: 'red' }}>*</span>
                  </Label>
                  <InputGroup className={`${styles['input-group']}`}>
                    <InputGroupText
                      className={`${styles['form-text']} ${
                        password1.valid && ' text-success border-success'
                      } ${
                        password1.warning !== '' && ' text-danger border-danger'
                      }`}
                    >
                      <FaKey></FaKey>
                    </InputGroupText>
                    <Input
                      autoComplete="off"
                      name="password1"
                      id="password1"
                      type="password"
                      placeholder="Enter the Password"
                      value={password1.value}
                      valid={password1.warning === '' && password1.value !== ''}
                      invalid={password1.warning !== ''}
                      onChange={(e) => {
                        dispatchPassword1(e.target.value);
                      }}
                      bsSize="sm"
                      className={`${styles['form-control']}`}
                      required
                    ></Input>
                  </InputGroup>
                  {password1.warning !== '' && (
                    <FormFeedback
                      className="text-danger d-block fw-bold"
                      style={{ fontSize: '12px' }}
                    >
                      {password1.warning}
                    </FormFeedback>
                  )}
                </FormGroup>
              </div>

              <div className="col-sm-12">
                <FormGroup className={`${styles['form-group']}`}>
                  <Label for="password2" className={`${styles.label}`}>
                    Password Confirmation:&nbsp;
                    <span style={{ color: 'red' }}>*</span>
                  </Label>
                  <InputGroup className={`${styles['input-group']}`}>
                    <InputGroupText
                      className={`${styles['form-text']} ${
                        password2.valid && ' text-success border-success'
                      } ${
                        password2.warning !== '' && ' text-danger border-danger'
                      }`}
                    >
                      <FaKey></FaKey>
                    </InputGroupText>
                    <Input
                      name="password2"
                      id="password2"
                      type="password"
                      placeholder="Confirm your Password"
                      value={password2.value}
                      valid={password2.warning === '' && password2.value !== ''}
                      invalid={password2.warning !== ''}
                      onChange={(e) => {
                        dispatchPassword2(e.target.value);
                      }}
                      bsSize="sm"
                      className={`${styles['form-control']}`}
                      required
                    ></Input>
                  </InputGroup>
                  {password2.warning !== '' && (
                    <FormFeedback
                      className="text-danger d-block fw-bold"
                      style={{ fontSize: '12px' }}
                    >
                      {password2.warning}
                    </FormFeedback>
                  )}
                </FormGroup>
              </div>
            </FormGroup>
          </div>

          {toast.message !== '' && (
            <Alert
              color={toast.color}
              style={{
                fontSize: '15px',
                fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif',
              }}
              className="my-1 py-2"
            >
              {toast.message}
            </Alert>
          )}

          <Button
            color="success"
            className={`${styles['btn-block']}`}
            onClick={submitHandler}
          >
            <FaPaperPlane color="white" className="me-1"></FaPaperPlane>
            UPDATE
          </Button>
        </div>
      </Form>
    </>
  );
}

export default Reset;
