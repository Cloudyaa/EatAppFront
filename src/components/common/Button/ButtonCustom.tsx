import React from 'react';

interface Props {
  children: React.ReactNode;
  classes: string;
  onClick: () => void;
}

export const ButtonCustom = ({ onClick, classes, children }: Props) => {
  return (
    <button type="button" onClick={onClick} className={`btn ${classes}`}>
      {children}
    </button>
  );
};
