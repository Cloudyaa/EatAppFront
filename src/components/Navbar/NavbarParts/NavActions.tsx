import React, { useEffect, useState } from 'react';
import { NavbarPartWrapper } from './NavbarPartWrapper';
import { LocalGroceryStoreOutlined, PersonOutlineOutlined } from '@mui/icons-material';
import { Searchbar } from './Searchbar';
import { NavLink } from 'react-router-dom';
import { useViewport } from '../../../hooks';

export const NavActions = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { viewportWidth, breakpoint } = useViewport();

  useEffect(() => {
    viewportWidth < breakpoint ? setIsMobile(true) : setIsMobile(false);
  }, [viewportWidth]);

  const navActions = [
    {
      name: <p>My account</p>,
      to: '/user/login',
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
      <Searchbar />

      {navActions.map(({ name, to, icon }, index) => {
        return (
          <NavLink to={to} key={index} className="navbar__actions-element">
            {icon}
            {isMobile ? name : null}
          </NavLink>
        );
      })}
    </NavbarPartWrapper>
  );
};
