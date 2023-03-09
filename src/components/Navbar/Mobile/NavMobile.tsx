import React, { useState } from 'react';
import { MobileOpen, MobileClosed } from 'components';

export const NavMobile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleShow = () => (isOpen ? setIsOpen(false) : setIsOpen(true));

  return (
    <>
      {isOpen ? (
        <MobileOpen handleShow={handleShow} isOpen={isOpen} />
      ) : (
        <MobileClosed handleShow={handleShow} isOpen={isOpen} />
      )}
    </>
  );
};
