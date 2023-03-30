import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRedirectToHome = () => {
  const [timer, setTimer] = useState<number>(10);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer === 1) {
        clearInterval(timer);
        navigate('/');
      } else {
        setTimer((prev) => prev - 1);
      }
    }, 1000);
    return () => {
      clearTimeout(interval);
    };
  }, [timer]);

  return { timer };
};
