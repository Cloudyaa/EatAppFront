import React from 'react';
import { FooterImageWrapperStyled, FooterWrapperStyled } from './styled';
import { HashLinkStyled, Image, Logo, OutsideLinkShort } from 'components';
import { Typography } from '@mui/material';
import { colors } from 'styles';

export const Footer = () => {
  return (
    <footer>
      <FooterWrapperStyled fullWidth>
        <Logo size="medium" />
        <Typography sx={{ color: colors.dark.light, fontSize: 'max(1.2rem, 2cqi)' }}>
          2023 ©️ Klaudia Olczyk
        </Typography>
        <Typography>
          All images used in this project are from <OutsideLinkShort to="Freepik" /> and{' '}
          <OutsideLinkShort to="Pexels" />.
          <br />
          Product descriptions and nutrition info from <OutsideLinkShort to="Ocado" />.
          <br />
          All credits available{' '}
          <HashLinkStyled color={'light'} size={'inherit'} to={'/credits'}>
            here
          </HashLinkStyled>
        </Typography>
      </FooterWrapperStyled>
      <FooterImageWrapperStyled>
        <Image name="footer" alt="Many vegetables photo" />
      </FooterImageWrapperStyled>
    </footer>
  );
};
