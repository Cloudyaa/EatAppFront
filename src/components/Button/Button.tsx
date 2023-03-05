import React, { useState } from 'react';

interface Props {
  color: 'light' | 'dark';
  size: 'sm' | 'lg';
  children: React.ReactNode;
}

export const Button = ({ color, size, children }: Props) => {
  const [colorClass, setColorClass] = useState('');
  const [sizeClass, setSizeClass] = useState('');

  color === 'light' ? setColorClass('btn-light') : setColorClass('btn-dark');
  size === 'sm' ? setSizeClass('btn-small') : setSizeClass('btn-big');


  return <button className={`btn ${colorClass} ${sizeClass}`}>{children}</button>;
};
