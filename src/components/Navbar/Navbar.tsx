import React, { useState } from 'react';
import { AppBar, Box, Dialog, IconButton, Toolbar, Typography } from '@mui/material';
import { NavLinks } from './NavLinks';
import { Close, Menu } from '@mui/icons-material';

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleOpen = () => setMobileOpen(true);
  const handleClose = () => setMobileOpen(false);

  return (
    <>
      <AppBar position="static" sx={{ background: 'none' }}>
        <Toolbar className="navbar">
          <Box className="navbar__links" sx={{ display: { xs: 'none', md: 'block' } }}>
            <NavLinks />
          </Box>
          <Box className="navbar__logo">
            <Typography variant="h5">eat.</Typography>
          </Box>
          <Box className="navbar__actions" sx={{ display: { xs: 'none', md: 'block' } }}>
            <div className="navbar__actions-item">
              <p>Searchbar</p>
            </div>
          </Box>
          <IconButton sx={{ display: { md: 'none', xs: 'block' } }} onClick={handleOpen}>
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* mobile */}
      <Dialog
        open={mobileOpen}
        fullScreen
        fullWidth
        sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
      >
        <AppBar position="static" sx={{ background: 'none' }}>
          {/* logo + close icon */}
          <Toolbar sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Box className="navbar__logo">
              <Typography variant="h5">eat.</Typography>
            </Box>
            <IconButton sx={{ display: { md: 'none', xs: 'block' } }} onClick={handleClose}>
              <Close />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* nav links */}
        <Box className="navbar__links" sx={{ display: { md: 'none', xs: 'block' } }}>
          <NavLinks />
        </Box>

        {/* nav actions */}
        <Box className="navbar__actions" sx={{ display: { md: 'none', xs: 'block' } }}>
          <div className="navbar__actions-item">
            <p>Searchbar</p>
          </div>
        </Box>
      </Dialog>
    </>
  );
};
