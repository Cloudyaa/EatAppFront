import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { Form, Formik } from 'formik';
import { Box } from '@mui/material';
import { AccountLoginResponse, AccountLoginDto, ErrorResponse } from 'types';
import { apiUrl } from '../../../config';
import { LoginSchema } from '../../../utilis/validationSchemas';
import {
  FormWrapper,
  ButtonFull,
  ErrorMessage,
  CustomPasswordInput,
  CustomTextInput,
} from 'components';

export const LoginForm = () => {
  const [apiResponse, setApiResponse] = useState<AccountLoginResponse | null>(null);
  const [errorResponse, setErrorResponse] = useState<ErrorResponse | null>(null);

  // eslint-disable-next-line
  const [cookies, setCookie, removeCookie] = useCookies(['token', 'userId']);

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
      navigate(`/user/dashboard/${apiResponse.userId}`);
    }
    // if admin
    if (apiResponse.role === 'admin') {
      navigate(`/admin/${apiResponse.userId}`);
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
        {(formik) => (
          <Form>
            {/* Email */}
            <CustomTextInput name="email" label="Email *" />

            {/* Password */}
            <CustomPasswordInput
              sx={{
                borderColor: 'var(--color-primary)',
                color: 'var(--color-primary)',
                borderWidth: '2px !important',
              }}
              name="password"
              label="Password *"
            />

            <ButtonFull>Submit</ButtonFull>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.9rem',
                mt: 1,
              }}
            >
              <p>Don&apos;t have account?</p>
              <NavLink className="link-light" to={'/account/signup'}>
                Sign up
              </NavLink>
            </Box>
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};