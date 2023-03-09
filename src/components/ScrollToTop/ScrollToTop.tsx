import React, { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import { ExpandLess } from '@mui/icons-material';

interface Props {
  showBelow: number;
}

export const ScrollToTop = ({ showBelow }: Props) => {
  const [show, setShow] = useState<boolean>(false);

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    scrollPosition > showBelow ? setShow(true) : setShow(false);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  const handleClick = () => {
    window['scrollTo']({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {show && (
        <div className="scroll-to-top">
          <IconButton onClick={handleClick}>
            <ExpandLess />
          </IconButton>
        </div>
      )}
    </>
  );
};
