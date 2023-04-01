import React from 'react';
import {
  ButtonFull,
  CustomTextInput,
  FacebookIcon,
  FatFontStyled,
  FormWrapper,
  InstagramIcon,
  MoveSectionUp,
  SectionHeader,
  SectionWrapper,
  SpaceFix,
  SubPageWrapper,
  TwitterIcon,
  CustomTextField,
  FlexEvenlyWrapper,
} from 'components';
import { SectionId } from 'frontTypes';
import { ContactInfoTextStyled, ContactWrapperStyled } from './styled';
import { ContactSchema } from 'utils';
import { Form, Formik } from 'formik';
import { Box, Typography } from '@mui/material';

interface ContactDTO {
  name: string;
  email: string;
  orderNo: string;
  message: string;
}

export const Contact = () => {
  return (
    <MoveSectionUp>
      <SectionWrapper id={SectionId.contact} classes="home__contact">
        <SectionHeader>Contact</SectionHeader>
        <SubPageWrapper>
          <ContactWrapperStyled>
            <Box sx={{ gridArea: 'sendMessage' }}>
              <FatFontStyled light>Send us a message</FatFontStyled>
              <ContactInfoTextStyled>
                We are committed to providing high-quality products and service to our customers.
                When something goes wrong, we need you to tell us about it. This will help us to
                maintain the highest quality products and best working practices. We will reply
                ASAP.
              </ContactInfoTextStyled>
            </Box>

            <Box sx={{ gridArea: 'findUs' }}>
              <FatFontStyled light>Find us there</FatFontStyled>
              <FlexEvenlyWrapper>
                <Box sx={{ textAlign: 'left' }}>
                  <Typography>81 Wern Ddu Lane</Typography>
                  <Typography>Ludborough</Typography>
                  <Typography>DN36 7UT</Typography>
                  <Typography>United Kingdom</Typography>
                </Box>
                <Box sx={{ textAlign: 'right' }}>
                  <Typography>contact@eat.com</Typography>
                  <Typography>077 3483 7229</Typography>
                </Box>
              </FlexEvenlyWrapper>

              <SpaceFix />
              <FlexEvenlyWrapper>
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
              </FlexEvenlyWrapper>
            </Box>

            <Box sx={{ gridArea: 'form' }}>
              <FormWrapper>
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
            </Box>
          </ContactWrapperStyled>
        </SubPageWrapper>
      </SectionWrapper>
    </MoveSectionUp>
  );
};
