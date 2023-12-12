import React from 'react';
import { FormControl } from '@mui/material';
import { styled } from '@mui/system';
import { useField } from 'formik';
import { InvalidInputMessage } from 'components';
import { customInputStyles } from './CustomInput.styles';

const CustomField = styled('input')(customInputStyles);

// eslint-disable-next-line
export const CustomFileInput = ({ label, children, ...props }: any) => {
  const [field, meta] = useField(props);

  return (
    <FormControl sx={{ marginBlock: 2 }}>
      <CustomField
        id={props.id}
        label={label}
        type="file"
        color="secondary"
        variant="outlined"
        {...field}
        {...props}
      >
        {children}
      </CustomField>
      {meta.touched && meta.error ? <InvalidInputMessage>{meta.error}</InvalidInputMessage> : null}
    </FormControl>
  );
};
