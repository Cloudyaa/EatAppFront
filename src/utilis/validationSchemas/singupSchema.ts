import * as yup from 'yup';

export const SignupSchema = yup.object().shape({
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .max(20, 'Password should be of maximum 20 characters length')
    .matches( /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\S)(?=.*[!@#$%^&*()_+\-=[\]{}~;:'<>,./?`])(?!.*(.)\1)[A-Za-z0-9\S!@#$%^&*()_+\-=[\]{}~;:'<>,./?`]{8,20}$/, 'Password must contain minimum of 8 characters, at least one uppercase letter, one lowercase letter, one number and one of special character')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Password does not match')
    .required('Confirm your password'),
});
