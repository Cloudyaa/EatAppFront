import React from 'react';
import { SectionHeader, SectionWrapper, SubPageWrapper } from 'components';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
export const NotFoundSearch = () => {
  const { search_query } = useParams();

  return (
    <SectionWrapper>
      <SectionHeader>Oops!</SectionHeader>
      <SubPageWrapper>
        <h3>Sorry! We could not find any results matching &quot;{search_query}&quot;</h3>
        <Typography>Please try and search again..</Typography>
      </SubPageWrapper>
    </SectionWrapper>
  );
};
