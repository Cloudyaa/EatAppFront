import React from 'react';

interface Props {
  children: React.ReactNode;
  addClass?: string;
}

export const Header = ({ children, addClass }: Props) => (
  <h2 className={`section-header ${addClass}`}>{children}</h2>
);
