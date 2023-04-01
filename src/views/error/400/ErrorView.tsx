import React from 'react';
import { BackHomeBtn, Image, SectionHeader, SpaceFix, SubPageWrapper } from 'components';
import { ErrorWrapperStyled } from './ErrorWrapper.styled';
import { Typography } from '@mui/material';
import { ErrorImageWrapperStyled } from './ErrorImageWrapper.styled';

interface Props {
  status: number | undefined;
  errorMessage: string | undefined;
}

export const ErrorView = ({ status, errorMessage }: Props) => {
  return (
    <ErrorWrapperStyled>
      <SpaceFix />
      <SectionHeader>Oops!</SectionHeader>
      <SubPageWrapper>
        <ErrorImageWrapperStyled>
          {status === 401 ? (
            <Image name="err-401" alt="401 image" />
          ) : status === 403 ? (
            <Image name="err-403" alt="403 image" />
          ) : (
            <Image name="err-404" alt="404 image" />
          )}
        </ErrorImageWrapperStyled>
        <h4>Looks like you&apos;re lost</h4>
        <Typography sx={{ fontSize: '70%' }}>{errorMessage}</Typography>
        <BackHomeBtn medium />
      </SubPageWrapper>
    </ErrorWrapperStyled>
  );
};
