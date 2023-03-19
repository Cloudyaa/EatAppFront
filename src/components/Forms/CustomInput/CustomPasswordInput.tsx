import React, { useState } from 'react';
import { useField } from 'formik';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { InvalidInputMessage } from './InvalidInputMessage';

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
      <InputLabel
        color="secondary"
        sx={{ fontFamily: 'var(--main-text-font) !important' }}
        htmlFor="password"
      >
        {label}
      </InputLabel>
      <OutlinedInput
        id={props.id}
        label={label}
        type={showPassword ? 'text' : 'password'}
        color="secondary"
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
