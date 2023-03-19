import React from 'react';
import { ButtonLink, SectionHeader, SectionWrapper, SubPageWrapper, ButtonCustom } from 'components';
import { SectionId } from 'frontTypes';
import { AddRounded, RemoveRounded } from '@mui/icons-material';

export const Bestsellers = () => {
  return (
    <SectionWrapper id={SectionId.bestsellers} classes="home__bestsellers">
      <SectionHeader>Our bestsellers</SectionHeader>
      <div className="auto-grid-container bestsellers__cards-container">
        <div className="bestsellers__card-wrapper">
          <div className="bestsellers__card-image-wrapper">
            <img src="/img/products/tomatoes.jpg" alt="Tomatoes" />
          </div>
          <div className="bestsellers__card-title">Tomatoes</div>
          <div className="bestsellers__card-price txt-muted">3.49/kg</div>
          <div className="bestsellers__card-button-group has-change-qty">
            <ButtonCustom
              classes="bestsellers__card-button-change-qty"
              onClick={() => console.log('added')}
            >
              <AddRounded />
            </ButtonCustom>
            <span>3</span>
            <ButtonCustom
              classes="bestsellers__card-button-change-qty"
              onClick={() => console.log('added')}
            >
              <RemoveRounded />
            </ButtonCustom>
          </div>
        </div>
        <div className="bestsellers__card-wrapper">
          <div className="bestsellers__card-image-wrapper">
            <img src="/img/products/carrots.jpg" alt="Tomatoes" />
          </div>
          <div className="bestsellers__card-title">Carrots</div>
          <div className="bestsellers__card-price txt-muted">3.49/kg</div>
          <div className="bestsellers__card-button-group has-add">
            <ButtonCustom
              classes="bestsellers__card-button-add"
              onClick={() => console.log('added')}
            >
              Add
            </ButtonCustom>
          </div>
        </div>
        <div className="bestsellers__card-wrapper">
          <div className="bestsellers__card-image-wrapper">
            <img src="/img/products/lettuce.jpg" alt="Tomatoes" />
          </div>
          <div className="bestsellers__card-title">Lettuce</div>
          <div className="bestsellers__card-price txt-muted">3.49/kg</div>
          <div className="bestsellers__card-button-group has-add">
            <ButtonCustom
              classes="bestsellers__card-button-add"
              onClick={() => console.log('added')}
            >
              Add
            </ButtonCustom>
          </div>
        </div>
      </div>
      <SubPageWrapper addSx={{ height: '8rem' }}>
        <ButtonLink color="dark" size="xl" to="/products/search">
          Shop all
        </ButtonLink>
      </SubPageWrapper>
    </SectionWrapper>
  );
};
