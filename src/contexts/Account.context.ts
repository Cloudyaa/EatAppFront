import { createContext } from 'react';

/* eslint-disable */
export const AccountContext = createContext({
  token: '',
  setToken: (s: string) => {},
  userId: '',
  setUserId: (s: string) => {},
});
