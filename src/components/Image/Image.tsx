import React from 'react';

interface Props {
  name: string;
  alt: string;
  addClass: string;
}

export const Image = ({name, alt, addClass}: Props) => {
  return (
    <img
      className={addClass}
      src={`/img/${name}-400.png`}
      srcSet={`/img/${name}-400.png 400w,
                  /img/${name}-600.png 600w,
                  /img/${name}-800.png 800w`}
      alt={alt}
      loading="lazy"
    />
  );
};
