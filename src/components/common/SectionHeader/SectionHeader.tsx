import React from 'react';

interface Props {
  children: React.ReactNode;
  classes?: string;
}

export const SectionHeader = ({ children, classes }: Props) => (
  <div className={`section-header__wrapper ${classes}`}>
    <h2 className="section-header">{children}</h2>
  </div>
);
