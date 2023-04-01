import React from 'react';
import { OutsideLink, SectionHeader, SectionWrapper, SubPageWrapper } from 'components';
import { Divider, List, ListItem } from '@mui/material';
import { creditsData } from './creditsData';

export const CreditsView = () => {
  return (
    <SectionWrapper classes="credits">
      <SectionHeader>Credits</SectionHeader>
      <SubPageWrapper>
        <List sx={{ width: 'max(14rem, 60vw)' }}>
          {creditsData.map((one, index) => (
            <>
              <ListItem key={index}>
                {one.type}: Image by&nbsp;
                <OutsideLink to={one.link}>{one.by}</OutsideLink>
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      </SubPageWrapper>
    </SectionWrapper>
  );
};
