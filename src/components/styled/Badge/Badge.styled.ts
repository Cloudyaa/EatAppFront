import { styled } from '@mui/system';
import BadgeUnstyled, { badgeUnstyledClasses } from '@mui/base/BadgeUnstyled';
import { colors } from 'styles';

export const BadgeStyled = styled(BadgeUnstyled)(
  () => `
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  line-height: 1;
  list-style: none;
  position: relative;
  display: inline-block;

  & .${badgeUnstyledClasses.badge} {
    z-index: auto;
    position: absolute;
    top: 0;
    right: 0;
    min-width: 22px;
    height: 22px;
    padding: 0 3%;
    color: ${colors.light.main};
    font-weight: 600;
    font-size: 12px;
    line-height: 19px;
    white-space: nowrap;
    text-align: center;
    border-radius: 12px;
    background: ${colors.secondary.main};
    transform: translate(50%, -50%);
    transform-origin: 100% 0; 
  }

  & .${badgeUnstyledClasses.invisible} {
    opacity: 0;
    pointer-events: none;
  }
  `,
);
