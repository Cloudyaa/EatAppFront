import React, { useContext, useEffect, useState } from 'react';
import { Alert, Button } from '@mui/material';
import { Form, Formik } from 'formik';
import { CustomPasswordInput, CustomTextInput } from '../CustomInput';
import Snackbar from '@mui/material/Snackbar';
import { AccountLoginResponse, AccountLoginDto } from 'types';
import { useNavigate } from 'react-router-dom';
import { AccountContext } from '../../../contexts/Account.context';
import { apiUrl } from '../../../config';

export const LoginForm = () => {
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [apiResponse, setApiResponse] = useState<AccountLoginResponse | null>(null);

  const { token, setToken, userId, setUserId } = useContext(AccountContext);
  const navigate = useNavigate();

  const handleSnackbarClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleFormReset = () => {
    setTimeout(() => {
      //  resStatus !== 400 && formik.resetForm();
    }, 1000);
  };

  const loginUser = async (values: AccountLoginDto) => {
    try {
      const res = await fetch(`${apiUrl}/account/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data: AccountLoginResponse = await res.json();
      setApiResponse(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (apiResponse) {
      setToken(apiResponse.token);
      setUserId(apiResponse.userId);
    }
  }, [apiResponse]);

  // if login successful
  if (apiResponse && apiResponse.status === 200 && token) {
    // if user
    if (apiResponse.role === 'user') {
      navigate(`/user/dashboard/${userId}`);
    }

    // if admin
    if (apiResponse.role === 'admin') {
      navigate(`/admin/${userId}`);
    }
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={async (values: AccountLoginDto) => {
        await loginUser(values);
        setSnackbarOpen(true);
      }}
    >
      {(formik) => (
        <Form className="d-flex flex-column justify-content-center align-items-center">
          {/* Email */}
          <CustomTextInput name="email" label="Email *" />

          {/* Password */}
          <CustomPasswordInput name="password" label="Password *" />

          <Button
            fullWidth
            color="primary"
            variant="contained"
            type="submit"
            onClick={handleFormReset}
          >
            Submit
          </Button>

          <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
            <Alert
              onClose={handleSnackbarClose}
              severity={apiResponse && apiResponse.status === 200 ? 'success' : 'error'}
              sx={{ width: '100%' }}
            >
              Message
            </Alert>
          </Snackbar>
        </Form>
      )}
    </Formik>
  );
};
