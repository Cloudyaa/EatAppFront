import React, { useState } from 'react';
import { MobileOpen, MobileClosed } from './MobileHelpers';

export const NavMobile = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleClick = () => (mobileOpen ? setMobileOpen(false) : setMobileOpen(true));

  return (
    <>
      {mobileOpen ? (
        <MobileOpen handleClick={handleClick} mobileOpen={mobileOpen} />
      ) : (
        <MobileClosed handleClick={handleClick} mobileOpen={mobileOpen} />
      )}
    </>
  );
};
