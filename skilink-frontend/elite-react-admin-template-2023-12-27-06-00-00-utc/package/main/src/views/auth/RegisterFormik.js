// import React from 'react';
// import { Button, Label, FormGroup, Container, Row, Col, Card, CardBody } from 'reactstrap';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { Link } from 'react-router-dom';
// import AuthLogo from "../../layouts/logo/AuthLogo";
// import { ReactComponent as LeftBg } from '../../assets/images/bg/login-bgleft.svg';
// import { ReactComponent as RightBg } from '../../assets/images/bg/login-bg-right.svg';

// const RegisterFormik = () => {
//   const initialValues = {
//     UserName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     acceptTerms: false,
//   };

//   const validationSchema = Yup.object().shape({
//     UserName: Yup.string().required('UserName is required'),
//     email: Yup.string().email('Email is invalid').required('Email is required'),
//     password: Yup.string()
//       .min(6, 'Password must be at least 6 characters')
//       .required('Password is required'),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref('password'), null], 'Passwords must match')
//       .required('Confirm Password is required'),
//     acceptTerms: Yup.bool().oneOf([true], 'Accept Terms & Conditions is required'),
//   });

//   return (
//     <div className="loginBox">
//       <LeftBg className="position-absolute left bottom-0" style={{ fill: 'black' , filter: 'grayscale(100%) brightness(0%)'}} />
//       <RightBg className="position-absolute end-0 top" style={{ fill: 'black' , filter: 'grayscale(100%) brightness(0%)'}} />
//       <Container fluid className="h-100">
//         <Row className="justify-content-center align-items-center h-100">
//           <Col lg="12" className="loginContainer">
//             <AuthLogo />
//             <Card>
//               <CardBody className="p-4 m-1">
//                 <h5 className="mb-0">Register as Freelancer</h5>
//                 <small className="pb-4 d-block">
//                   Already have an account? <Link to="/auth/loginformik">Login</Link>
//                 </small>
//                 <Formik
//                   initialValues={initialValues}
//                   validationSchema={validationSchema}
//                   onSubmit={(fields) => {
//                     // eslint-disable-next-line no-alert
//                     alert(`SUCCESS!! :-)\n\n${JSON.stringify(fields, null, 4)}`);
//                   }}
//                   render={({ errors, touched }) => (
//                     <Form>
//                       <FormGroup>
//                         <Label htmlFor="firstName">User Name</Label>
//                         <Field
//                           name="UserName"
//                           type="text"
//                           className={`form-control ${
//                             errors.UserName && touched.UserName ? ' is-invalid' : ''
//                           }`}
//                         />
//                         <ErrorMessage
//                           name="UserName"
//                           component="div"
//                           className="invalid-feedback"
//                         />
//                       </FormGroup>

//                       <FormGroup>
//                         <Label htmlFor="email">Email</Label>
//                         <Field
//                           name="email"
//                           type="text"
//                           className={`form-control${
//                             errors.email && touched.email ? ' is-invalid' : ''
//                           }`}
//                         />
//                         <ErrorMessage name="email" component="div" className="invalid-feedback" />
//                       </FormGroup>
//                       <FormGroup>
//                         <Label htmlFor="password">Password</Label>
//                         <Field
//                           name="password"
//                           type="password"
//                           className={`form-control${
//                             errors.password && touched.password ? ' is-invalid' : ''
//                           }`}
//                         />
//                         <ErrorMessage
//                           name="password"
//                           component="div"
//                           className="invalid-feedback"
//                         />
//                       </FormGroup>
//                       <FormGroup>
//                         <Label htmlFor="confirmPassword">Confirm Password</Label>
//                         <Field
//                           name="confirmPassword"
//                           type="password"
//                           className={`form-control${
//                             errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : ''
//                           }`}
//                         />
//                         <ErrorMessage
//                           name="confirmPassword"
//                           component="div"
//                           className="invalid-feedback"
//                         />
//                       </FormGroup>
//                       <FormGroup inline className="form-check">
//                         <Field
//                           type="checkbox"
//                           name="acceptTerms"
//                           id="acceptTerms"
//                           className={`form-check-input ${
//                             errors.acceptTerms && touched.acceptTerms ? ' is-invalid' : ''
//                           }`}
//                         />
//                         <Label htmlFor="acceptTerms" className="form-check-label">
//                           Accept Terms & Conditions
//                         </Label>
//                         <ErrorMessage
//                           name="acceptTerms"
//                           component="div"
//                           className="invalid-feedback"
//                         />
//                       </FormGroup>
//                       <FormGroup>
//                         <Button type="submit" color="primary" className="register">
//                           Register
//                         </Button>
//                         <Button type="reset" color="secondary" className="reset-button">
//                           Reset
//                         </Button>
//                       </FormGroup>
//                     </Form>
//                   )}
//                 />
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default RegisterFormik;


import React from 'react';
import { Button, Label, FormGroup, Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import AuthLogo from "../../layouts/logo/AuthLogo";
import { ReactComponent as LeftBg } from '../../assets/images/bg/login-bgleft.svg';
import { ReactComponent as RightBg } from '../../assets/images/bg/login-bg-right.svg';

const RegisterFormik = () => {
  const initialValues = {
    UserName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  };

  const validationSchema = Yup.object().shape({
    UserName: Yup.string().required('User Name is required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms & Conditions is required'),
  });

  return (
    <div className="loginBox">
      <LeftBg className="position-absolute left bottom-0" style={{ fill: 'black' , filter: 'grayscale(100%) brightness(0%)'}} />
      <RightBg className="position-absolute end-0 top" style={{ fill: 'black' , filter: 'grayscale(100%) brightness(0%)'}} />
      <Container fluid className="h-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col lg="6" md="8" sm="10" xs="12" className="loginContainer">
            <AuthLogo style={{ width: '200px', height: '200px' }} />
            <Card>
              <CardBody className="p-4 m-1">
                <h5 className="mb-0" style={{ fontSize: '24px' }}>Register as Freelancer</h5>
                <small className="pb-4 d-block" style={{ fontSize: '16px' }}>
                  Already have an account? <Link to="/auth/Login" style={{ color: 'blue', fontSize: '16px' }}>Login</Link>
                </small>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  // onSubmit={(fields) => {
                  //   alert(`SUCCESS!! :-)\n\n${JSON.stringify(fields, null, 4)}`);
                  // }}
                  render={({ errors, touched }) => (
                    <Form>
                      <FormGroup>
                        <Label htmlFor="UserName">User Name</Label>
                        <Field
                          name="UserName"
                          type="text"
                          className={`form-control ${
                            errors.UserName && touched.UserName ? 'is-invalid' : ''
                          }`}
                          style={{ fontSize: '18px' }}
                        />
                        <ErrorMessage
                          name="UserName"
                          component="div"
                          className="invalid-feedback"
                        />
                      </FormGroup>

                      <FormGroup>
                        <Label htmlFor="email">Email</Label>
                        <Field
                          name="email"
                          type="text"
                          className={`form-control ${
                            errors.email && touched.email ? 'is-invalid' : ''
                          }`}
                          style={{ fontSize: '18px' }}
                        />
                        <ErrorMessage name="email" component="div" className="invalid-feedback" />
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="password">Password</Label>
                        <Field
                          name="password"
                          type="password"
                          className={`form-control ${
                            errors.password && touched.password ? 'is-invalid' : ''
                          }`}
                          style={{ fontSize: '18px' }}
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="invalid-feedback"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <Field
                          name="confirmPassword"
                          type="password"
                          className={`form-control ${
                            errors.confirmPassword && touched.confirmPassword ? 'is-invalid' : ''
                          }`}
                          style={{ fontSize: '18px' }}
                        />
                        <ErrorMessage
                          name="confirmPassword"
                          component="div"
                          className="invalid-feedback"
                        />
                      </FormGroup>
                      <FormGroup className="form-check">
                        <Field
                          type="checkbox"
                          name="acceptTerms"
                          id="acceptTerms"
                          className={`form-check-input ${
                            errors.acceptTerms && touched.acceptTerms ? 'is-invalid' : ''
                          }`}
                          style={{ fontSize: '18px' }}
                        />
                        <Label htmlFor="acceptTerms" className="form-check-label" style={{ fontSize: '18px' }}>
                          Accept Terms & Conditions
                        </Label>
                        <ErrorMessage
                          name="acceptTerms"
                          component="div"
                          className="invalid-feedback"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Button type="submit" color="dark" className="me-2" style={{ fontSize: '18px' }}>
                          Register
                        </Button>
                        <Button type="reset" color="secondary" style={{ fontSize: '18px' }}>
                          Reset
                        </Button>
                      </FormGroup>
                    </Form>
                  )}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterFormik;
