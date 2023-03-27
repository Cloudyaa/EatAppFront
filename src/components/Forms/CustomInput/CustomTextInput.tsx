import React from 'react';
import { FormControl, TextField } from '@mui/material';
import { styled } from '@mui/system';
import { useField } from 'formik';
import { InvalidInputMessage } from './InvalidInputMessage';
import { customInputStyles } from './CustomInput.styles';

const CustomTextField = styled(TextField)(customInputStyles);

// eslint-disable-next-line
export const CustomTextInput = ({ label, children, ...props }: any) => {
  const [field, meta] = useField(props);

  return (
    <FormControl fullWidth sx={{ marginBlock: 2 }}>
      <CustomTextField
        id={props.id}
        label={label}
        type="text"
        color="secondary"
        variant="outlined"
        {...field}
        {...props}
      >
        {children}
      </CustomTextField>
      {meta.touched && meta.error ? <InvalidInputMessage>{meta.error}</InvalidInputMessage> : null}
    </FormControl>
  );
};
