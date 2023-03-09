import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  color: 'light' | 'dark';
  size: 'sm' | 'lg';
  children: React.ReactNode;
  to: string;
}

export const Button = ({ color, size, to, children }: Props) => {
  const [colorClass, setColorClass] = useState('');
  const [sizeClass, setSizeClass] = useState('');

  useEffect(() => {
    color === 'light' ? setColorClass('btn-light') : setColorClass('btn-dark');
    size === 'sm' ? setSizeClass('btn-small') : setSizeClass('btn-big');
  }, []);

  return (
    <NavLink to={to} className={`btn ${colorClass} ${sizeClass}`}>
      {children}
    </NavLink>
  );
};
