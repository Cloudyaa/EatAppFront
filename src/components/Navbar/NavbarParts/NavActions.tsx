import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';
import { LocalGroceryStoreOutlined, PersonOutlineOutlined } from '@mui/icons-material';
import { SpaceFix, Searchbar, NavbarPartWrapper } from 'components';
import { useViewport } from 'hooks';
import { RootState } from 'store';
import { BadgeStyled, HashLinkStyled } from 'styles';
import { Box } from '@mui/material';

interface Props {
  handleShow?: () => void;
}

export const NavActions = ({ handleShow }: Props) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { viewportWidth, breakpointDesktop } = useViewport();

  useEffect(() => {
    viewportWidth < breakpointDesktop ? setIsMobile(true) : setIsMobile(false);
  }, [viewportWidth]);

  const [cookies] = useCookies();
  const getBasketQty = useSelector((state: RootState) => state.basket.totalQty);

  const navActions = [
    {
      name: <p>My account</p>,
      to: cookies.token ? `user/dashboard/${cookies.userId}` : '/account/login',
      icon: <PersonOutlineOutlined />,
    },

    {
      name: <p>Basket</p>,
      to: '/basket',
      icon: (
        <BadgeStyled badgeContent={getBasketQty} max={10}>
          <LocalGroceryStoreOutlined />
        </BadgeStyled>
      ),
    },
  ];

  return (
    <NavbarPartWrapper classes="navbar__actions">
      <SpaceFix />
      <Searchbar handleShow={handleShow} />
      <div className="navbar__actions-icons">
        {navActions.map(({ name, to, icon }, index) => {
          return (
            <HashLinkStyled to={to} key={index} onClick={handleShow}>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                {icon}
                {isMobile ? name : null}
              </Box>
            </HashLinkStyled>
          );
        })}
      </div>
    </NavbarPartWrapper>
  );
};
