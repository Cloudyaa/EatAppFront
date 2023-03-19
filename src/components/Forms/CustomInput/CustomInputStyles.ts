export const customInputStyles = {
  '& label': {
    fontFamily: 'var(--main-text-font) !important',
  },

  '& label.Mui-focused': {
    color: 'var(--color-secondary)',
  },

  '& input:valid + fieldset': {
    fontFamily: 'var(--main-text-font) !important',
    borderColor: 'var(--color-primary)',
    color: 'var(--color-primary)',
    borderWidth: 2,
  },
  '& input:invalid + fieldset': {
    borderColor: 'red',
    borderWidth: 1,
  },

  '& input:valid:focus + fieldset': {
    borderColor: 'var(--color-secondary) !important',
  },
};
