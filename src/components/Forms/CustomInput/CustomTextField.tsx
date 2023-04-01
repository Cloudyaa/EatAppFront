import React from 'react';
import { useField } from 'formik';
import { FormControl, InputLabel, OutlinedInput } from '@mui/material';
import { InvalidInputMessage } from 'components';
import { styled } from '@mui/system';
import { customOutlinedInputStyles } from './CustomOutlinedInput.styles';

const CustomOutlinedInput = styled(OutlinedInput)(customOutlinedInputStyles);

// eslint-disable-next-line
export const CustomTextField = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);

  return (
    <FormControl fullWidth variant="outlined" sx={{ marginBlock: 2 }}>
      <InputLabel color="secondary" htmlFor="password">
        {label}
      </InputLabel>
      <CustomOutlinedInput
        id={props.id}
        label={label}
        type="text"
        color="primary"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? <InvalidInputMessage>{meta.error}</InvalidInputMessage> : null}
    </FormControl>
  );
};
