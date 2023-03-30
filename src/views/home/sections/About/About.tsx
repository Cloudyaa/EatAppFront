import React from 'react';
import { FatFontStyled, SectionHeader, SectionWrapper, SubPageWrapper } from 'components';
import { SectionId } from 'frontTypes';
import { pricier } from 'utils';
import { AboutCardWrapperStyled, AboutCardIconStyled } from './styled';
import {
  ContactMailOutlined,
  EmojiNatureOutlined,
  LocalShippingOutlined,
  SavingsOutlined,
} from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

interface AboutCardEntity {
  icon: React.ReactNode;
  name: string;
  desc: string;
}

export const About = () => {
  const aboutCards: AboutCardEntity[] = [
    {
      icon: <EmojiNatureOutlined />,
      name: 'Local products',
      desc: 'Our products are best quality. \n' + 'We support our local farmers',
    },
    {
      icon: <SavingsOutlined />,
      name: 'Free delivery',
      desc: `Every order over ${pricier.format(50)} will be delivered for free`,
    },
    {
      icon: <LocalShippingOutlined />,
      name: 'Same day dispatch',
      desc: 'Order before 12:00 from Monday to Friday to get same day dispatch',
    },
    {
      icon: <ContactMailOutlined />,
      name: 'Always in touch',
      desc: 'We are here for you 24/7 if you want to get in touch',
    },
  ];

  return (
    <SectionWrapper id={SectionId.about} classes="home__about">
      <SectionHeader>Why buy from us?</SectionHeader>
      <SubPageWrapper>
        <AboutCardWrapperStyled className="about__card-wrapper">
          {aboutCards.map((card, index) => (
            <Box key={index}>
              <AboutCardIconStyled>{card.icon}</AboutCardIconStyled>
              <FatFontStyled>{card.name}</FatFontStyled>
              <Typography sx={{ paddingInline: 4 }}>{card.desc}</Typography>
            </Box>
          ))}
        </AboutCardWrapperStyled>
      </SubPageWrapper>
    </SectionWrapper>
  );
};
