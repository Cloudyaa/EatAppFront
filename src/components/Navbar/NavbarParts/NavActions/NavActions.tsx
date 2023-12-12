import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';
import { LocalGroceryStoreOutlined, PersonOutlineOutlined } from '@mui/icons-material';
import { SpaceFix, Searchbar, BadgeStyled, HashLinkStyled, FlexEvenlyWrapper } from 'components';
import { useViewport } from 'hooks';
import { RootState } from 'store';
import { IconWrapperStyled } from './IconWrapper.styled';
import { NavActionsWrapperStyled } from './NavActionsWrapper.styled';

interface Props {
  handleShow?: () => void;
}

export const NavActions = ({ handleShow }: Props) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { viewportWidth, breakpointDesktop } = useViewport();

  useEffect(() => {
    viewportWidth < breakpointDesktop ? setIsMobile(true) : setIsMobile(false);
  }, [viewportWidth]);

  const [cookies] = useCookies();
  const getBasketQty = useSelector((state: RootState) => state.basket.totalQty);

  const navActions = [
    {
      name: <p>My account</p>,
      to: cookies.token ? `${cookies.role}/${cookies.userId}/dashboard` : '/account/login',
      icon: <PersonOutlineOutlined />,
    },

    {
      name: <p>Basket</p>,
      to: '/basket',
      icon: (
        <BadgeStyled badgeContent={getBasketQty} max={10}>
          <LocalGroceryStoreOutlined />
        </BadgeStyled>
      ),
    },
  ];

  return (
    <NavActionsWrapperStyled>
      <SpaceFix />
      <Searchbar handleShow={handleShow} />
      <IconWrapperStyled className="nav__actions">
        {navActions.map(({ name, to, icon }, index) => {
          return (
            <HashLinkStyled to={to} key={index} onClick={handleShow}>
              <FlexEvenlyWrapper addSx={{ gap: 2 }}>
                {icon}
                {isMobile ? name : null}
              </FlexEvenlyWrapper>
            </HashLinkStyled>
          );
        })}
      </IconWrapperStyled>
    </NavActionsWrapperStyled>
  );
};
