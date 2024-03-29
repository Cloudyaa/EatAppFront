import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { Form, Formik } from 'formik';
import { AccountLoginResponse, AccountLoginDto, ErrorResponse } from 'types';
import { apiUrl } from 'config';
import { LoginSchema } from 'utils';
import {
  FormWrapper,
  ButtonFull,
  ErrorMessage,
  CustomPasswordInput,
  CustomTextInput,
  FormRedirect,
} from 'components';

export const LoginForm = () => {
  const [apiResponse, setApiResponse] = useState<AccountLoginResponse | null>(null);
  const [errorResponse, setErrorResponse] = useState<ErrorResponse | null>(null);

  // eslint-disable-next-line
  const [, setCookie, ] = useCookies(['token', 'userId', 'role']);

  const navigate = useNavigate();

  const loginUser = async (values: AccountLoginDto) => {
    try {
      const res = await fetch(`${apiUrl}/account/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        const data: AccountLoginResponse = await res.json();
        setApiResponse(data);

        const cookieOptions = {
          path: '/',
          secure: true,
          maxAge: 3 * 60 * 60,
        };

        setCookie('token', data.token, { ...cookieOptions });
        setCookie('userId', data.userId, { ...cookieOptions });
        setCookie('role', data.role, { ...cookieOptions });
      } else {
        const data: ErrorResponse = await res.json();
        setErrorResponse(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // if login successful
  if (apiResponse && apiResponse.status === 200 && apiResponse.token) {
    // if user
    if (apiResponse.role === 'user') {
      navigate(`/user/${apiResponse.userId}/dashboard`);
    }
    // if admin
    if (apiResponse.role === 'admin') {
      navigate(`/admin/${apiResponse.userId}/dashboard`);
    }
  }

  return (
    <FormWrapper>
      {!apiResponse && errorResponse && <ErrorMessage>{errorResponse.message}</ErrorMessage>}

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={async (values: AccountLoginDto) => await loginUser(values)}
        validationSchema={LoginSchema}
      >
        {() => (
          <Form>
            {/* Email */}
            <CustomTextInput name="email" label="Email *" />

            {/* Password */}
            <CustomPasswordInput name="password" label="Password *" />

            <ButtonFull>Submit</ButtonFull>

            <FormRedirect to="signup"></FormRedirect>
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};
