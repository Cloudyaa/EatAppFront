import React, { useEffect, useState } from 'react';
import { SimpleProductEntity } from 'types';
import { Box, Container } from '@mui/material';

export const HomeView = () => {
  const [bestsellers, setBestsellers] = useState<SimpleProductEntity[] | null>(null);

  // useEffect(() => {
  //   (async () => {
  //     const res = await fetch('http://localhost:3001/products/bestsellers');
  //     const data = await res.json();
  //     setBestsellers(data);
  //   })();
  // }, []);
  //
  // if (!bestsellers) {
  //   return <p>Loading</p>;
  // }

  return (
    <>
      <header className="home__hero">
        <Box className="container">
          <h1>Because you must eat</h1>
        </Box>
      </header>

      <section className="home__bestsellers">
        <Box className="container">
          <h2>Our bestsellers</h2>
          <ul>
            {/* {bestsellers.map((one) => ( */}
            {/*   <li key={one.productId}>{one.name}</li> */}
            {/* ))} */}
            <li className="txt-muted">test</li>
          </ul>
        </Box>
      </section>

      <section className="home__discount">
        <Box className="container">
          <p className="txt-bolder">Discount</p>
        </Box>
      </section>

      <section className="home__about-us">
        <Box className="container">About us</Box>
      </section>

      <section className="home__contact">
        <Box className="container">Contact</Box>
      </section>

      <footer>
        <Box className="container">Footer</Box>
      </footer>
    </>
  );
};
