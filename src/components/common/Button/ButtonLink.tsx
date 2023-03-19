import React from 'react';
import { NavLink } from 'react-router-dom';
import { useButton } from 'hooks';

interface Props {
  color: 'light' | 'dark';
  size: 'sm' | 'lg';
  children: React.ReactNode;
  to: string;
}

export const ButtonLink = ({ color, size, to, children }: Props) => {
  const { colorClass, sizeClass } = useButton(color, size);

  return (
    <NavLink to={to} className={`btn ${colorClass} ${sizeClass}`}>
      {children}
    </NavLink>
  );
};
