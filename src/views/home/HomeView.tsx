import React, { useEffect, useState } from 'react';
import { SimpleProductEntity } from 'types';
import { Box } from '@mui/material';

export const HomeView = () => {
 // const [bestsellers, setBestsellers] = useState<SimpleProductEntity[] | null>(null);

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
        <Box className="container home__hero-container">
          <h1 className="home__hero-title">Because you must</h1>
          <p className="home__hero-title-side">eat.</p>
          <p className="home__hero-desc">
            Our mission is to deliver the best quality food to people. We believe that fresh fruits
            and vegetables are necessary to keep you alive. And happy. Nobody likes to be hungry.
          </p>
          <div className="home__hero-bottom">
            <img
              className="home__hero-bottom-image-left"
              src="/img/hero-left.png"
              alt="orange image"
            />
            <button className="btn-big-light">See our products</button>
          </div>
          <div className="home__hero-image-right">
            <img
              src="/img/hero-right-400.png"
              srcSet="/img/hero-right-400.png 344w,
                          /img/hero-right-600.png 516w,
                          /img/hero-right-800.png 631w"
              alt="vegetables image"
              loading="lazy"
            />
          </div>
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
