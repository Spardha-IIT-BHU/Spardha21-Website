import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
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
  Row,
} from 'reactstrap';
import styles from './Signup.module.css';
import {
  FaUser,
  FaEnvelope,
  FaAt,
  FaKey,
  FaBuilding,
  FaBriefcase,
  FaPhone,
  FaPaperPlane,
} from 'react-icons/fa';
import instituteList from './institutelist.json';
import { useReducer } from 'react/cjs/react.development';
import isEmail from 'validator/lib/isEmail';
import isAlphanumeric from 'validator/lib/isAlphanumeric';
import isInt from 'validator/lib/isInt';
import isPhone from 'validator/lib/isMobilePhone';
import isAlpha from 'validator/lib/isAlpha';

function Signup() {
  const submitHandler = (e) => {
    dispatchToast({
      color: 'primary',
      message: '',
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

    e.preventDefault();
    if (
      !email.valid ||
      !username.valid ||
      !password1.valid ||
      !password2.valid ||
      !name.valid ||
      !designation.valid ||
      !institute.valid ||
      !phone.valid
    ) {
      dispatchToast({
        color: 'danger',
        message: 'Please fill out all the fields correctly',
      });
      return;
    }

    axios
      .post('https://api.spardha.co.in/auth/register/', {
        username: username.value,
        email: email.value,
        password: password1.value,
        name: name.value,
        institution_name: institute.value,
        designation: designation.value,
        phone_no: phone.value,
      })
      .then((res) => {
        dispatchToast({
          color: 'success',
          message: res.data.success,
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

  const emailReducer = (state, value) => {
    let warning = '';
    if (value === '') warning = 'This field is required.';
    else if (!isEmail(value)) warning = 'Please enter a valid email address.';
    return { value, warning, valid: warning === '' && value !== '' };
  };

  const usernameReducer = (state, value) => {
    let warning = '';
    if (value === '') warning = 'This field is required.';
    else if (value.length < 6 || value.length > 30)
      warning = 'Username must be of length 6 - 30.';
    else if (!isAlphanumeric(value, undefined, { ignore: ' ._-' }))
      warning = 'Please use only alphabets, numbers or _, - and .';
    return { value, warning, valid: warning === '' && value !== '' };
  };

  const password1Reducer = (state, value) => {
    let warning = '';
    if (value === '') warning = 'This field is required.';
    else if (value.length < 6 || value.length > 30)
      warning = 'Username must be of length 6 - 30.';
    return { value, warning, valid: warning === '' && value !== '' };
  };

  const password2Reducer = (state, value) => {
    let warning = '';
    if (value === '') warning = 'This field is required.';
    else if (value !== password1.value) warning = 'Passwords do not match.';
    return { value, warning, valid: warning === '' && value !== '' };
  };

  const nameReducer = (state, value) => {
    let warning = '';
    if (value === '') warning = 'This field is required.';
    else if (!isAlpha(value, undefined, { ignore: ' ' }))
      warning = 'Please enter a valid name.';
    return { value, warning, valid: warning === '' && value !== '' };
  };

  const designationReducer = (state, value) => {
    let warning = '';
    if (value === '') warning = 'This field is required.';
    else if (isInt(value)) warning = 'Please enter a valid designation.';
    return { value, warning, valid: warning === '' && value !== '' };
  };

  const instituteReducer = (state, value) => {
    let warning = '';
    if (value === '') warning = 'This field is required.';
    else if (isInt(value)) warning = 'Please enter a valid Institute Name.';
    return { value, warning, valid: warning === '' && value !== '' };
  };

  const phoneReducer = (state, value) => {
    let warning = '';
    if (value === '') warning = 'This field is required.';
    else if (!isPhone(value, 'en-IN'))
      warning = 'Please enter a valid phone number.';
    return { value, warning, valid: warning === '' && value !== '' };
  };

  const toastReducer = (state, action) => {
    return { color: action.color, message: action.message };
  };

  const [email, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    warning: '',
    valid: false,
  });

  const [username, dispatchUsername] = useReducer(usernameReducer, {
    value: '',
    warning: '',
    valid: false,
  });

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

  const [name, dispatchName] = useReducer(nameReducer, {
    value: '',
    warning: '',
    valid: false,
  });

  const [designation, dispatchDesignation] = useReducer(designationReducer, {
    value: '',
    warning: '',
    valid: false,
  });

  const [institute, dispatchInstitute] = useReducer(instituteReducer, {
    value: '',
    warning: '',
    valid: false,
  });

  const [phone, dispatchPhone] = useReducer(phoneReducer, {
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
      <h3 className={`${styles.heading}`}> SIGN UP </h3>
      <hr />
      <div className="col-sm-12">
        <Alert
          color="success"
          style={{
            fontSize: '14px',
            fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif',
          }}
          className="py-2"
        >
          <b> Already Signed Up? </b>
          Click{' '}
          <Link to="/register/login" style={{ textDecoration: 'none' }}>
            here{' '}
          </Link>{' '}
          to login and
          <Link to="/register/verify" style={{ textDecoration: 'none' }}>
            {' '}
            here{' '}
          </Link>
          to verify your account.
        </Alert>
        <Alert
          color="primary"
          className="py-2"
          style={{
            fontSize: '14px',
            fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif',
          }}
        >
          <strong>NOTE:</strong> Individual registrations are not entertained.
          Only one registration is allowed per college.
        </Alert>
      </div>
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
                <FaUser /> Details
              </h4>
            </div>

            <FormGroup className={`${styles['form-group']}`}>
              <Row xs={1} md={1} xl={2}>
                <div className="col-sm-6">
                  <FormGroup className={`${styles['form-group']}`}>
                    <Label for="email" className={`${styles.label}`}>
                      Email Address:&nbsp;
                      <span style={{ color: 'red' }}>*</span>
                    </Label>
                    <InputGroup className={`${styles['input-group']}`}>
                      <InputGroupText
                        className={`${styles['form-text']} ${
                          email.valid && ' text-success border-success'
                        } ${
                          email.warning !== '' && ' text-danger border-danger'
                        }`}
                      >
                        <FaEnvelope></FaEnvelope>
                      </InputGroupText>
                      <Input
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Enter Your Email Address"
                        value={email.value}
                        valid={email.warning === '' && email.value !== ''}
                        invalid={email.warning !== ''}
                        onChange={(e) => {
                          dispatchEmail(e.target.value);
                        }}
                        bsSize="sm"
                        className={`${styles['form-control']}`}
                        required
                      ></Input>
                    </InputGroup>
                    {email.warning !== '' && (
                      <FormFeedback
                        className="text-danger d-block fw-bold"
                        style={{ fontSize: '12px' }}
                      >
                        {email.warning}
                      </FormFeedback>
                    )}
                  </FormGroup>
                </div>

                <div className="col-sm-6">
                  <FormGroup className={`${styles['form-group']}`}>
                    <Label for="username" className={`${styles.label}`}>
                      Username:&nbsp;
                      <span style={{ color: 'red' }}>*</span>
                    </Label>
                    <InputGroup className={`${styles['input-group']}`}>
                      <InputGroupText
                        className={`${styles['form-text']} ${
                          username.valid && ' text-success border-success'
                        } ${
                          username.warning !== '' &&
                          ' text-danger border-danger'
                        }`}
                      >
                        <FaAt></FaAt>
                      </InputGroupText>
                      <Input
                        name="username"
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                        value={username.value}
                        valid={username.warning === '' && username.value !== ''}
                        invalid={username.warning !== ''}
                        onChange={(e) => {
                          dispatchUsername(e.target.value);
                        }}
                        bsSize="sm"
                        className={`${styles['form-control']}`}
                        required
                      ></Input>
                    </InputGroup>
                    {username.warning !== '' && (
                      <FormFeedback
                        className="text-danger d-block fw-bold"
                        style={{ fontSize: '12px' }}
                      >
                        {username.warning}
                      </FormFeedback>
                    )}
                  </FormGroup>
                </div>
              </Row>

              <Row xs={1} md={1} xl={2}>
                <div className="col-sm-6">
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
                          password1.warning !== '' &&
                          ' text-danger border-danger'
                        }`}
                      >
                        <FaKey></FaKey>
                      </InputGroupText>
                      <Input
                        name="password1"
                        id="password1"
                        type="password"
                        placeholder="Enter the Password"
                        value={password1.value}
                        valid={
                          password1.warning === '' && password1.value !== ''
                        }
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

                <div className="col-sm-6">
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
                          password2.warning !== '' &&
                          ' text-danger border-danger'
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
                        valid={
                          password2.warning === '' && password2.value !== ''
                        }
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
              </Row>

              <Row xs={1} md={1} xl={2}>
                <div className="col-sm-6">
                  <FormGroup className={`${styles['form-group']}`}>
                    <Label for="name" className={`${styles.label}`}>
                      Name:&nbsp;
                      <span style={{ color: 'red' }}>*</span>
                    </Label>
                    <InputGroup className={`${styles['input-group']}`}>
                      <InputGroupText
                        className={`${styles['form-text']} ${
                          name.valid && ' text-success border-success'
                        } ${
                          name.warning !== '' && ' text-danger border-danger'
                        }`}
                      >
                        <FaUser></FaUser>
                      </InputGroupText>
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter your Name"
                        value={name.value}
                        valid={name.warning === '' && name.value !== ''}
                        invalid={name.warning !== ''}
                        onChange={(e) => {
                          dispatchName(e.target.value);
                        }}
                        bsSize="sm"
                        className={`${styles['form-control']}`}
                        required
                      ></Input>
                    </InputGroup>
                    {name.warning !== '' && (
                      <FormFeedback
                        className="text-danger d-block fw-bold"
                        style={{ fontSize: '12px' }}
                      >
                        {name.warning}
                      </FormFeedback>
                    )}
                  </FormGroup>
                </div>

                <div className="col-sm-6">
                  <FormGroup className={`${styles['form-group']}`}>
                    <Label for="designation" className={`${styles.label}`}>
                      Designation:&nbsp;
                      <span style={{ color: 'red' }}>*</span>
                    </Label>
                    <InputGroup className={`${styles['input-group']}`}>
                      <InputGroupText
                        className={`${styles['form-text']} ${
                          designation.valid && ' text-success border-success'
                        } ${
                          designation.warning !== '' &&
                          ' text-danger border-danger'
                        }`}
                      >
                        <FaBriefcase></FaBriefcase>
                      </InputGroupText>
                      <Input
                        type="designation"
                        name="designation"
                        id="designation"
                        placeholder="Write your Designation"
                        value={designation.value}
                        valid={
                          designation.warning === '' && designation.value !== ''
                        }
                        invalid={designation.warning !== ''}
                        onChange={(e) => {
                          dispatchDesignation(e.target.value);
                        }}
                        bsSize="sm"
                        className={`${styles['form-control']}`}
                        required
                      ></Input>
                    </InputGroup>
                    {designation.warning !== '' && (
                      <FormFeedback
                        className="text-danger d-block fw-bold"
                        style={{ fontSize: '12px' }}
                      >
                        {designation.warning}
                      </FormFeedback>
                    )}
                  </FormGroup>
                </div>
              </Row>

              <Row xs={1} md={1} xl={2}>
                <div className="col-sm-6">
                  <FormGroup className={`${styles['form-group']}`}>
                    <Label for="institute" className={`${styles.label}`}>
                      Institute Name:&nbsp;
                      <span style={{ color: 'red' }}>*</span>
                    </Label>
                    <InputGroup className={`${styles['input-group']}`}>
                      <InputGroupText
                        className={`${styles['form-text']} ${
                          institute.valid && ' text-success border-success'
                        } ${
                          institute.warning !== '' &&
                          ' text-danger border-danger'
                        }`}
                      >
                        <FaBuilding></FaBuilding>
                      </InputGroupText>
                      <Input
                        type="text"
                        name="institute"
                        id="institute"
                        placeholder="Select / Enter your Institute & City"
                        value={institute.value}
                        valid={
                          institute.warning === '' && institute.value !== ''
                        }
                        invalid={institute.warning !== ''}
                        onChange={(e) => {
                          dispatchInstitute(e.target.value);
                        }}
                        bsSize="sm"
                        list="instituteList"
                        className={`${styles['form-control']}`}
                        required
                      ></Input>
                      <datalist id="instituteList">
                        <option selected={true} disabled>
                          Select your institute
                        </option>
                        {instituteList.map(({ id, name }) => {
                          return <option value={name} key={id}></option>;
                        })}
                      </datalist>
                    </InputGroup>
                    {institute.warning !== '' && (
                      <FormFeedback
                        className="text-danger d-block fw-bold"
                        style={{ fontSize: '12px' }}
                      >
                        {institute.warning}
                      </FormFeedback>
                    )}
                  </FormGroup>
                </div>

                <div className="col-sm-6">
                  <FormGroup className={`${styles['form-group']}`}>
                    <Label for="phone" className={`${styles.label}`}>
                      Phone Number:&nbsp;
                      <span style={{ color: 'red' }}>*</span>
                    </Label>
                    <InputGroup className={`${styles['input-group']}`}>
                      <InputGroupText
                        className={`${styles['form-text']} ${
                          phone.valid && ' text-success border-success'
                        } ${
                          phone.warning !== '' && ' text-danger border-danger'
                        }`}
                      >
                        <FaPhone></FaPhone>
                      </InputGroupText>
                      <Input
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="Enter Your Phone No."
                        value={phone.value}
                        valid={phone.warning === '' && phone.value !== ''}
                        invalid={phone.warning !== ''}
                        onChange={(e) => {
                          dispatchPhone(e.target.value);
                        }}
                        bsSize="sm"
                        className={`${styles['form-control']}`}
                        required
                      ></Input>
                    </InputGroup>
                    {phone.warning !== '' && (
                      <FormFeedback
                        className="text-danger d-block fw-bold"
                        style={{ fontSize: '12px' }}
                      >
                        {phone.warning}
                      </FormFeedback>
                    )}
                  </FormGroup>
                </div>
              </Row>
            </FormGroup>
          </div>

          <div className="col-sm-12">
            <FormGroup check className={`${styles['form-group']} ps-3`}>
              <Input type="checkbox" name="terms" id="terms" required></Input>
              <Label
                for="terms"
                className={`${styles.label}`}
                style={{ paddingTop: '2px', textAlign: 'justify' }}
              >
                <span style={{ color: 'red' }}>*</span>By submitting this form,
                you agree to abide by the{' '}
                <Link to="/rulebook" style={{ textDecoration: 'none' }}>
                  "Rules of Spardha 2021."{' '}
                </Link>
              </Label>
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
            Sign up
          </Button>
        </div>
      </Form>
    </>
  );
}

export default Signup;
