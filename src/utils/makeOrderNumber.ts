export const makeOrderNumber = (number: number | string) => number.toString().padStart(4, '0');
