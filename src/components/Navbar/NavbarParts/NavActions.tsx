import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LocalGroceryStoreOutlined, PersonOutlineOutlined } from '@mui/icons-material';
import { SpaceFix, Searchbar, NavbarPartWrapper } from 'components';
import { useViewport } from 'hooks';
import { useCookies } from 'react-cookie';

interface Props {
  handleShow?: () => void;
}

export const NavActions = ({ handleShow }: Props) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { viewportWidth, breakpoint } = useViewport();

  useEffect(() => {
    viewportWidth < breakpoint ? setIsMobile(true) : setIsMobile(false);
  }, [viewportWidth]);

  const [cookies] = useCookies();

  const navActions = [
    {
      name: <p>My account</p>,
      to: cookies.token ? `user/dashboard/${cookies.userId}` : '/account/login',
      icon: <PersonOutlineOutlined />,
    },

    {
      name: <p>Basket</p>,
      to: '/user/checkout',
      icon: <LocalGroceryStoreOutlined />,
    },
  ];

  return (
    <NavbarPartWrapper classes="navbar__actions">
      <SpaceFix />
      <Searchbar handleShow={handleShow} />
      <div className="navbar__actions-icons">
        {navActions.map(({ name, to, icon }, index) => {
          return (
            <NavLink to={to} key={index} className="navbar__actions-element" onClick={handleShow}>
              {icon}
              {isMobile ? name : null}
            </NavLink>
          );
        })}
      </div>
    </NavbarPartWrapper>
  );
};
