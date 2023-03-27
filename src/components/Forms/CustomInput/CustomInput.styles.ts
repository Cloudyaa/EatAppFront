import { colors } from 'styles';

export const customInputStyles = {
  '& label.Mui-focused': {
    color: colors.secondary.main,
  },

  '& input:valid + fieldset': {
    borderColor: colors.primary.main,
    color: colors.primary.main,
    borderWidth: 2,
  },
  '& input:invalid + fieldset': {
    borderColor: 'red',
    borderWidth: 1,
  },

  '& input:valid:focus + fieldset': {
    borderColor: colors.secondary.main,
  },
};
