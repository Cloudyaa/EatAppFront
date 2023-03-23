const locale = 'en-GB';

const options = {
  style: 'currency',
  currency: 'GBP',
};

export const pricier = new Intl.NumberFormat(locale, options);
