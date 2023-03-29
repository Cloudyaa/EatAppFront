import React from 'react';
import { ButtonStyled, SectionHeader, SectionWrapper, SubPageWrapper } from 'components';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from 'store';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { capitalizeAndSplit, pricier } from 'utils';
import { colors } from 'styles';
import { DiscountRowStyled, StyledTableCell, TotalRowStyled } from './CheckoutTable';
import { useDiscount } from 'hooks';
import { apiUrl } from 'config';
import { useCookies } from 'react-cookie';
import { OrderDTO, OrderedProductEntity } from 'types';
import { clearBasket } from 'features/basket';
import { useNavigate } from 'react-router-dom';

export const OrderCheckoutView = () => {
  const basket = useSelector((state: RootState) => state.basket);
  const orderedProducts: OrderedProductEntity[] = basket.products.map((product) => {
    return {
      productId: product.productId,
      name: product.name,
      price: product.price,
      orderedQty: product.qtyInBasket,
    };
  });

  const { discount, totalAtCheckout } = useDiscount();

  const [cookies] = useCookies();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  console.log(JSON.stringify(orderedProducts));

  const userOrder: OrderDTO = {
    products: orderedProducts,
    totalQty: basket.totalQty,
    totalValue: Number(totalAtCheckout.toFixed(2)),
    userId: cookies.userId,
  };

  console.log(JSON.stringify(userOrder));

  const handleCheckout = async () => {
    try {
      const res = await fetch(`${apiUrl}/user/${cookies.userId}/order/new`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookies.token}`,
        },
        body: JSON.stringify(userOrder),
      });

      if (res.ok) {
        dispatch(clearBasket());
        navigate(`/user/${cookies.userId}/order/success`);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <SectionWrapper classes="order__checkout">
      <SectionHeader>Checkout</SectionHeader>
      <SubPageWrapper>
        <h3>Your order summary</h3>

        <TableContainer sx={{ maxWidth: 600 }} component={Paper}>
          <Table size="small" aria-label="order summary table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Net price</StyledTableCell>
                <StyledTableCell>Ordered qty</StyledTableCell>
                <StyledTableCell>Total price</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ color: colors.primary.main }}>
              {basket.products.map((one) => (
                <TableRow
                  key={one.productId}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {capitalizeAndSplit(one.name)}
                  </TableCell>
                  <TableCell align="center">{pricier.format(one.price)}</TableCell>
                  <TableCell align="center">{one.qtyInBasket}</TableCell>
                  <TableCell align="center">
                    {pricier.format(one.qtyInBasket * one.price)}
                  </TableCell>
                </TableRow>
              ))}
              <DiscountRowStyled>
                <TableCell rowSpan={3} />
                <TableCell colSpan={2}>Subtotal</TableCell>
                <TableCell align="right">{pricier.format(basket.totalValue)}</TableCell>
              </DiscountRowStyled>
              {discount !== 0 && (
                <DiscountRowStyled>
                  <TableCell colSpan={2}>First order discount</TableCell>
                  <TableCell align="right">- {pricier.format(discount)}</TableCell>
                </DiscountRowStyled>
              )}
              <TotalRowStyled>
                <TableCell colSpan={2}>Total</TableCell>
                <TableCell align="right">{pricier.format(totalAtCheckout)}</TableCell>
              </TotalRowStyled>
            </TableBody>
          </Table>
        </TableContainer>

        <ButtonStyled onClick={handleCheckout}>Checkout</ButtonStyled>
      </SubPageWrapper>
    </SectionWrapper>
  );
};
