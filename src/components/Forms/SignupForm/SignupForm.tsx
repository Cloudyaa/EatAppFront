import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { Box, Button, MenuItem } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { SignupSchema } from '../../../utilis/validationSchemas';
import { apiUrl } from '../../../config';
import { CustomPasswordInput, CustomTextInput } from '../CustomInput';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const SignupForm = () => {
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [resStatus, setResStatus] = useState<number>(0);
  const [apiData, setApiData] = useState<any | null>(null);

  const handleFormReset = () => {
    setTimeout(() => {
      //  resStatus !== 400 && formik.resetForm();
    }, 1000);
  };

  const handleSnackbarClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const saveUser = async (values: any) => {
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

      setResStatus(res.status);

      if (res.ok) {
        const data = await res.text();
        if (!data || data.length === 0) {
          // Handle empty response here
          return console.log('Empty response');
        }
      } else {
        const data = await res.text();
        const parsed = JSON.parse(data);
        setApiData(parsed);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Box sx={{ width: '35ch', margin: '0 auto' }}>
        <Formik
          initialValues={{
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={async (values: any) => {
            // alert(JSON.stringify(values, null, 2));
            await saveUser(values);
            setSnackbarOpen(true);
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
                  severity={resStatus === 200 ? 'success' : 'error'}
                  sx={{ width: '100%' }}
                >
                  Message
                </Alert>
              </Snackbar>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};
