import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { NavItems } from './NavItems';

export const Navbar = () => {
  return (
    <AppBar position="static" sx={{ background: 'none' }}>
      <Toolbar className="navbar">
        <Box className="navbar__links">
          <NavItems />
        </Box>
        <Box className="navbar__logo">
          <Typography variant="h5">eat.</Typography>
        </Box>
        <Box className="navbar__actions">
          <div className="navbar__actions-item">
            <p>Searchbar</p>
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
