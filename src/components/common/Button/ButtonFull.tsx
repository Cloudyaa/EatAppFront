import React from 'react';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import { colors } from 'styles';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

const CustomButton = styled(ButtonUnstyled)`
  background-color: ${colors.secondary.main};
  color: ${colors.light.main};
  padding: 12px 24px;
  font-size: 1.3rem;
  font-family: "arboria", sans-serif;
  border-radius: 10px;
  margin-top: 2rem;
  transition: all 200ms ease-out;
  cursor: pointer;
  border: none;
  height: 60px;
  width: 100%;

  &:hover {
    background-color: ${colors.secondary.light};
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${colors.secondary.main};
  }
;
}

&.${buttonUnstyledClasses.focusVisible} {
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(7, 56, 62, 0.5);
  outline: none;
}

&.${buttonUnstyledClasses.disabled} {
  opacity: 0.5;
  cursor: not-allowed;
}
`;

export const ButtonFull = ({ children, onClick }: Props) => {
  return (
    <CustomButton type="submit" className="btn" onClick={onClick}>
      {children}
    </CustomButton>
  );
};
