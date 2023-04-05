import React from 'react';
import { Form, Formik } from 'formik';
import { ContactSchema } from 'utils';
import {
  ButtonFull,
  FlexEvenlyWrapper,
  CustomTextField,
  CustomTextInput,
  FormWrapper,
} from 'components';

interface ContactDTO {
  name: string;
  email: string;
  orderNo: string;
  message: string;
}

export const ContactForm = () => (
  <FormWrapper addSx={{ gridArea: 'form' }}>
    <Formik
      initialValues={{
        name: '',
        email: '',
        orderNo: '',
        message: '',
      }}
      validationSchema={ContactSchema}
      onSubmit={async (values: ContactDTO) => {
        console.log(values);
      }}
    >
      {() => (
        <Form>
          <FlexEvenlyWrapper addSx={{ gap: 3 }}>
            {/* Name */}
            <CustomTextInput name="name" label="Name" />

            {/* Email */}
            <CustomTextInput name="email" label="Email *" />
          </FlexEvenlyWrapper>

          {/* Order number */}
          <CustomTextInput name="orderNo" label="Order number" />

          {/* Message */}
          <CustomTextField multiline minRows={5} name="message" label="Message " />

          <ButtonFull>Send</ButtonFull>
        </Form>
      )}
    </Formik>
  </FormWrapper>
);
