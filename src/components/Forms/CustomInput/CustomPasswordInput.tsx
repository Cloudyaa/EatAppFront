import React, { useState } from 'react';
import { useField } from 'formik';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { InvalidInputMessage } from './InvalidInputMessage';
import { styled } from '@mui/system';
import { customOutlinedInputStyles } from './CustomOutlinedInput.styles';

const CustomOutlinedInput = styled(OutlinedInput)(customOutlinedInputStyles);

// eslint-disable-next-line
export const CustomPasswordInput = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <FormControl fullWidth variant="outlined" sx={{ marginBlock: 2 }}>
      <InputLabel color="secondary" htmlFor="password">
        {label}
      </InputLabel>
      <CustomOutlinedInput
        id={props.id}
        label={label}
        type={showPassword ? 'text' : 'password'}
        {...field}
        {...props}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      {meta.touched && meta.error ? <InvalidInputMessage>{meta.error}</InvalidInputMessage> : null}
    </FormControl>
  );
};
