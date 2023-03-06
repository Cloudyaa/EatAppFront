import React, { useEffect, useState } from 'react';
import { SimpleProductEntity } from 'types';
import { Box } from '@mui/material';
import { Hero } from './Hero';
import { SectionWrapper } from '../../components/common/SectionWrapper/SectionWrapper';
import { SectionHeader } from '../../components/common/SectionHeader/SectionHeader';

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
      <Hero />
      <SectionWrapper classes="home__bestsellers">
        <SectionHeader>Our bestsellers</SectionHeader>
        <ul>
          {/* {bestsellers.map((one) => ( */}
          {/*   <li key={one.productId}>{one.name}</li> */}
          {/* ))} */}
          <li className="txt-muted">test</li>
        </ul>
      </SectionWrapper>

      <SectionWrapper classes="home__discount">
        <SectionHeader>Discount</SectionHeader>
      </SectionWrapper>

      <SectionWrapper classes="home__about-us">
        <SectionHeader>About us</SectionHeader>
      </SectionWrapper>

      <SectionWrapper classes="home__contact">
        <SectionHeader>Contact</SectionHeader>
      </SectionWrapper>

      <footer>
        <Box className="container">Footer</Box>
      </footer>
    </>
  );
};
