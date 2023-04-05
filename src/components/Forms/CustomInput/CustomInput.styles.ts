import { colors } from 'styles';

export const customInputStyles = {
  '& label.Mui-focused': {
    color: colors.secondary.main,
  },

  '& input:valid + fieldset': {
    borderColor: colors.primary.main,
    color: colors.primary.main,
    borderWidth: 2,
    borderRadius: 10,
    transition: 'all 0.2s ease-out',
  },

  '& input:hover + fieldset': {
    borderColor: `${colors.secondary.main} !important`,
  },

  '& input:valid:focus + fieldset': {
    borderColor: colors.secondary.main,
    color: colors.primary.main,
  },
};
