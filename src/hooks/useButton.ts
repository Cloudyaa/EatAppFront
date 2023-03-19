import { useEffect, useState } from 'react';

export const useButton = (color: 'light' | 'dark', size: 'sm' | 'lg') => {
  const [colorClass, setColorClass] = useState('');
  const [sizeClass, setSizeClass] = useState('');

  useEffect(() => {
    color === 'light' ? setColorClass('btn-light') : setColorClass('btn-dark');
    size === 'sm' ? setSizeClass('btn-small') : setSizeClass('btn-big');
  }, []);

  return { colorClass, sizeClass };
};
