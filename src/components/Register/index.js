import React, { useState } from 'react';

import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import register from 'services/register';

import { Formik, Form, Field, ErrorMessage } from 'formik';

function Register() {
  const [registered, setRegistered] = useState(false);
  if (registered) {
    return (
      <h2>
        <CheckCircleOutlineIcon />
        Congrats, you've been succesfully registered ! :)
      </h2>
    );
  }

  return (
    <>
      <Formik
        initialValues={{ username: '', password: '', repeatPassword: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = 'Required username';
          }
          if (!values.password) {
            errors.password = 'Required password';
          } else if (values.password.length < 3) {
            errors.password = 'password length must be greater than 3';
          }

          if (values.password !== values.repeatPassword) {
            errors.repeatPassword = 'passwords must match';
          }

          return errors;
        }}
        onSubmit={(values, { setFieldError }) => {
          const { username, password } = values;
          const realValues = { username, password };
          return register(realValues)
            .then(() => {
              setRegistered(true);
            })
            .catch(() => {
              setFieldError('username', 'This username is taken');
            });
        }}
      >
        {({ errors, isSubmitting }) => (
          <Form className="form">
            <Field
              name="username"
              type="text"
              placeholder="put here the username"
              className={errors.username ? 'error' : ''}
            />
            <ErrorMessage
              className="form-error"
              name="username"
              component="small"
            />

            <Field
              name="password"
              type="password"
              placeholder="put here the password"
              className={errors.password ? 'error' : ''}
            />
            <ErrorMessage
              className="form-error"
              name="password"
              component="small"
            />
            <Field
              name="repeatPassword"
              type="password"
              placeholder="confirm the password"
              className={errors.password ? 'error' : ''}
            />
            <ErrorMessage
              className="form-error"
              name="repeatPassword"
              component="small"
            />
            <button
              className="btn"
              disabled={
                isSubmitting ||
                errors.password ||
                errors.repeatPassword ||
                errors.username
              }
              type="submit"
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Register;
