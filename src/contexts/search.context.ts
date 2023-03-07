import { createContext } from 'react';

export const SearchContext = createContext({
  search: '',
  // eslint-disable-next-line
  setSearch: (s: string) => {},
});
