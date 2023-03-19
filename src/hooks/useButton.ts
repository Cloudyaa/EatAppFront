import { useEffect, useState } from 'react';

export const useButton = (color: 'light' | 'dark', size: 'sm' | 'lg' | 'xl') => {
  const [colorClass, setColorClass] = useState('');
  const [sizeClass, setSizeClass] = useState('');

  useEffect(() => {
    color === 'light' ? setColorClass('btn-light') : setColorClass('btn-dark');
    if (size === 'sm') setSizeClass('btn-small');
    if (size === 'lg') setSizeClass('btn-big');
    if (size === 'xl') setSizeClass('btn-xl');
  }, []);

  return { colorClass, sizeClass };
};
