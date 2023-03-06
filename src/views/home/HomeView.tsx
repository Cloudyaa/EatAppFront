import React from 'react';
import { sectionList } from './sectionList';

export const HomeView = () => (
  <>
    {sectionList.map(({ section }) => {
      return section;
    })}
  </>
);
