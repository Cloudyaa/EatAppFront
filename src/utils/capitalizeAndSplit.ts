export const capitalizeAndSplit = (str: string) => {
  str = str.charAt(0).toUpperCase() + str.slice(1);
  const strArr: string[] = str.split(/(?=[A-Z])/);
  if (strArr.length > 1) {
    for (let i = 1; i < strArr.length; i++) {
      strArr[i] = ' ' + strArr[i].toLowerCase();
    }
  }
  return strArr.join('');
};
