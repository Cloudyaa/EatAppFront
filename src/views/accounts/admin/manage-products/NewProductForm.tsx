import React, { ChangeEvent, useEffect, useState } from 'react';
import {
  ButtonFull,
  ButtonStyled,
  CustomNumberInput,
  CustomTextField,
  CustomTextInput,
  ErrorMessage,
  FlexEvenlyWrapper,
  FormWrapper,
  SectionHeader,
  SectionWrapper,
  SubPageWrapper,
} from 'components';
import { Form, Formik } from 'formik';
import { AccountSignupResponse, ErrorResponse, ProductDTO } from 'types';
import { apiUrl } from 'config';
import { ROUTES } from '../../../../routes/getRoutes';
import { useParams } from 'react-router-dom';
import { ADMIN_ROUTES } from '../../../../routes';
import { useCookies } from 'react-cookie';
import axios, { AxiosResponse } from 'axios';
import { Typography } from '@mui/material';

export const NewProductForm = () => {
  const { admin_id } = useParams();
  const [cookies] = useCookies(['token']);

  const [apiResponse, setApiResponse] = useState<AccountSignupResponse | null>(null);
  const [errorResponse, setErrorResponse] = useState<ErrorResponse | null>(null);
  const [selectedImage, setSelectedImage] = useState<Blob | null>(null);
  const [disabled, setDisabled] = useState<boolean>(true);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(event.target.files[0]);
    }
  };

  useEffect(() => {
    setDisabled(true);
  }, []);

  const handleImageSave = async () => {
    if (selectedImage) {
      try {
        const formData = new FormData();
        formData.append('file', selectedImage);

        const res: AxiosResponse<AccountSignupResponse | ErrorResponse> = await axios.post(
          `${apiUrl}${ROUTES.ADMIN}/${admin_id}${ADMIN_ROUTES.MANAGE_PRODUCTS}${ADMIN_ROUTES.UPLOAD_IMAGE}`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${cookies.token}`,
            },
          },
        );

        if (res.status === 200) {
          const data: AccountSignupResponse = res.data;
          setApiResponse(data);
          console.log(data);

          if (!data) {
            return console.log('Empty response');
          }
        } else {
          const data: ErrorResponse = res.data;
          setErrorResponse(data);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const saveProduct = async (values: ProductDTO) => {
    setDisabled(false);

    console.log(values);
    try {
      const res = await fetch(
        `${apiUrl}${ROUTES.ADMIN}/${admin_id}${ADMIN_ROUTES.MANAGE_PRODUCTS}${ADMIN_ROUTES.NEW_PRODUCT}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${cookies.token}`,
          },
          body: JSON.stringify({
            ...values,
            name: values.name.toLowerCase(),
          }),
        },
      );

      if (res.ok) {
        const data: AccountSignupResponse = await res.json();
        setApiResponse(data);
        console.log(data);
        if (!data) {
          return console.log('Empty response');
        }
      } else {
        const data: ErrorResponse = await res.json();
        setErrorResponse(data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <SectionWrapper>
      <SectionHeader>Add new product</SectionHeader>
      <SubPageWrapper
        addSx={{
          textAlign: 'left',
        }}
      >
        <FormWrapper>
          {!apiResponse && errorResponse && <ErrorMessage>{errorResponse.message}</ErrorMessage>}
          <Formik
            initialValues={{
              name: '',
              price: 0,
              description: '',
              energy: 0,
              fat: 0,
              fibre: 0,
              lifeInDays: 0,
              protein: 0,
              salt: 0,
              sugars: 0,
            }}
            onSubmit={async (values: ProductDTO) => {
              await saveProduct(values);
            }}
          >
            {() => (
              <Form>
                {/* Product name */}
                <CustomTextInput name="name" label="Product name *" />

                {/* Description */}
                <CustomTextField multiline minRows={5} name="description" label="Description *" />

                <FlexEvenlyWrapper addSx={{ gap: 4 }}>
                  {/* Price */}
                  <CustomNumberInput name="price" label="Price *" />
                  {/* Product life */}
                  <CustomNumberInput name="lifeInDays" label="Product life in days *" />
                </FlexEvenlyWrapper>

                <FlexEvenlyWrapper addSx={{ gap: 4 }}>
                  {/* Fat */}
                  <CustomNumberInput name="fat" label="Fat *" />
                  {/* Energy */}
                  <CustomNumberInput name="energy" label="Energy *" />
                  {/* Fibre */}
                  <CustomNumberInput name="fibre" label="Fibre *" />
                </FlexEvenlyWrapper>

                <FlexEvenlyWrapper addSx={{ gap: 4 }}>
                  {/* Protein */}
                  <CustomNumberInput name="protein" label="Protein *" />
                  {/* Salt */}
                  <CustomNumberInput name="salt" label="Salt *" />
                  {/* Sugars */}
                  <CustomNumberInput name="sugars" label="Sugars *" />
                </FlexEvenlyWrapper>
                <ButtonFull>Submit</ButtonFull>

                <FlexEvenlyWrapper
                  addSx={{
                    marginTop: 5,
                  }}
                >
                  <input type="file" accept="image/*" onChange={handleImageUpload} />
                  {disabled ? (
                    <Typography
                      sx={{
                        color: 'red',
                        fontSize: '12px',
                      }}
                    >
                      To save image, submit form first.
                    </Typography>
                  ) : (
                    <ButtonStyled
                      disabled={disabled}
                      type={'button'}
                      onClick={() => handleImageSave()}
                    >
                      Save Image
                    </ButtonStyled>
                  )}
                </FlexEvenlyWrapper>
              </Form>
            )}
          </Formik>
        </FormWrapper>
      </SubPageWrapper>
    </SectionWrapper>
  );
};
