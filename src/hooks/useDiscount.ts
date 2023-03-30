import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { apiUrl } from 'config';

export const useDiscount = () => {
  const basket = useSelector((state: RootState) => state.basket);
  const [discount, setDiscount] = useState<number>(0);
  const [totalAtCheckout, setTotalAtCheckout] = useState<number>(basket.totalValue);
  const [cookies] = useCookies();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${apiUrl}/user/${cookies.userId}/orders`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${cookies.token}`,
          },
        });
        const data = await res.json();

        if (res.ok) {
          setDiscount(0);
        } else if (data.message === 'No orders found yet') {
          const discountValue = basket.totalValue * 0.15;
          setDiscount(discountValue);
          const newOrderValue = basket.totalValue - discountValue;
          setTotalAtCheckout(newOrderValue);
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, [cookies.userId]);

  return { discount, totalAtCheckout };
};
