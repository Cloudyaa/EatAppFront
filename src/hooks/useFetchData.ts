import { useCookies } from 'react-cookie';

export const useFetchData = () => {
  const [cookies] = useCookies();
  return async <T, D>(url: string, method: 'GET' | 'POST', body?: D): Promise<T | void> => {
    try {
      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookies.token}`,
        },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        return (await res.json()) as T;
      }
    } catch (e) {
      console.error(e);
    }
  };
};
