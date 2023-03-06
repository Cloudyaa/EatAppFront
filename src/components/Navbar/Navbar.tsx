import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { NavLinks } from './NavLinks';

export const Navbar = () => {
  return (
    <AppBar position="static" sx={{ background: 'none' }}>
      <Toolbar className="navbar">
        <Box className="navbar__links">
          <NavLinks />
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
