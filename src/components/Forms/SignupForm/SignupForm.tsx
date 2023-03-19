import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { Box } from '@mui/material';
import { SignupSchema } from '../../../utilis/validationSchemas';
import { apiUrl } from '../../../config';
import { CustomPasswordInput, CustomTextInput } from '../CustomInput';
import { ButtonFull, SpaceFix } from '../../common';
import { useNavigate } from 'react-router-dom';
import { AccountSignupResponse, AccountSignupDto, ErrorResponse } from 'types';
import { ErrorMessage } from '../ErrorMessage';
import { FormWrapper } from '../FormWrapper';
import { Redirect } from '../Redirect';

export const SignupForm = () => {
  const [apiResponse, setApiResponse] = useState<AccountSignupResponse | null>(null);
  const [errorResponse, setErrorResponse] = useState<ErrorResponse | null>(null);

  const navigate = useNavigate();

  const handleFormReset = () => {
    setTimeout(() => {
      //  resStatus !== 400 && formik.resetForm();
    }, 1000);
  };

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
            // alert(JSON.stringify(values, null, 2));
            await saveUser(values);
          }}
        >
          {(formik) => (
            <Form className="d-flex flex-column justify-content-center align-items-center">
              {/* Email */}
              <CustomTextInput name="email" label="Email *" />

              {/* Password */}
              <CustomPasswordInput name="password" label="Password *" />

              {/* Confirm password */}
              <CustomPasswordInput name="confirmPassword" label="Confirm password *" />

              <ButtonFull onClick={handleFormReset}>Submit</ButtonFull>

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
                <Redirect to="login"></Redirect>
              </Box>
            </Form>
          )}
        </Formik>
        <SpaceFix />
      </FormWrapper>
    </>
  );
};
