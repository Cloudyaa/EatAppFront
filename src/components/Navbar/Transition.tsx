import React, { forwardRef, ReactElement, Ref } from 'react';
import { Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

export const Transition = forwardRef(
  (
    props: TransitionProps & {
      // eslint-disable-next-line
      children: ReactElement<any, any>;
    },
    ref: Ref<unknown>,
  ) => <Slide direction="left" ref={ref} {...props} />,
);

Transition.displayName = 'Transition';
