import { colors } from 'styles';

export const customOutlinedInputStyles = {
  ' &.MuiOutlinedInput-root fieldset': {
    border: ` 2px solid ${colors.primary.main} !important`,
    borderRadius: '10px',
    color: `${colors.primary.main} !important`,
  },

  '&.MuiOutlinedInput-root:is(:focus, :focus-within, :focus-visible) fieldset': {
    border: `2px solid ${colors.secondary.main} !important`,
  },
};
