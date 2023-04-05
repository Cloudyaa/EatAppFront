import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { SignupSchema } from 'utils';
import { apiUrl } from 'config';
import {
  FormRedirect,
  FormWrapper,
  ErrorMessage,
  ButtonFull,
  CustomPasswordInput,
  CustomTextInput,
} from 'components';
import { useNavigate } from 'react-router-dom';
import { AccountSignupResponse, AccountSignupDto, ErrorResponse } from 'types';

export const SignupForm = () => {
  const [apiResponse, setApiResponse] = useState<AccountSignupResponse | null>(null);
  const [errorResponse, setErrorResponse] = useState<ErrorResponse | null>(null);

  const navigate = useNavigate();

  const saveUser = async (values: AccountSignupDto) => {
    try {
      const res = await fetch(`${apiUrl}/account/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...values,
        }),
      });

      if (res.ok) {
        const data: AccountSignupResponse = await res.json();
        setApiResponse(data);

        if (!data) {
          return console.log('Empty response');
        }
      } else {
        const data: ErrorResponse = await res.json();
        setErrorResponse(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // if signup successful
  if (apiResponse && apiResponse.status === 200) {
    navigate('/account/signup/success');
  }

  return (
    <>
      <FormWrapper>
        {!apiResponse && errorResponse && <ErrorMessage>{errorResponse.message}</ErrorMessage>}
        <Formik
          initialValues={{
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={async (values: AccountSignupDto) => {
            await saveUser(values);
          }}
        >
          {() => (
            <Form>
              {/* Email */}
              <CustomTextInput name="email" label="Email *" />

              {/* Password */}
              <CustomPasswordInput name="password" label="Password *" />

              {/* Confirm password */}
              <CustomPasswordInput name="confirmPassword" label="Confirm password *" />

              <ButtonFull>Submit</ButtonFull>
              <FormRedirect to="login"></FormRedirect>
            </Form>
          )}
        </Formik>
      </FormWrapper>
    </>
  );
};
