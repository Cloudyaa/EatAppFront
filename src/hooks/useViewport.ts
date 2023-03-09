import { useEffect, useState } from 'react';

export const useViewport = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const breakpoint = 800;
  useEffect(() => {
    const handleWindowResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return { viewportWidth, breakpoint };
};
