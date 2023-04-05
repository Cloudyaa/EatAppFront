import * as yup from 'yup';

export const ContactSchema = yup.object().shape({
  email: yup.string().email('Enter a valid email').required('Email is required'),
  orderNo: yup.string().matches(/^[0-9]{4,20}$/, 'Please enter a valid order number'),
});
