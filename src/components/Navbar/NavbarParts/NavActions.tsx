import React from 'react';
import { IconButton } from '@mui/material';
import { NavbarPartWrapper } from './NavbarPartWrapper';
import { LocalGroceryStoreOutlined, PersonOutlineOutlined } from '@mui/icons-material';
import { Searchbar } from './Searchbar';
import { NavLink } from 'react-router-dom';

export const NavActions = () => {
  return (
    <NavbarPartWrapper classes="navbar__actions">
      <Searchbar />
      <IconButton>
        <NavLink to="/user/login">
          <PersonOutlineOutlined />
        </NavLink>
      </IconButton>
      <IconButton>
        <LocalGroceryStoreOutlined />
      </IconButton>
    </NavbarPartWrapper>
  );
};
