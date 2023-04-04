import React, { useEffect, useState } from 'react';
import { Paper, Table, TableContainer } from '@mui/material';
import { UserOrdersTableHead } from './UserOrdersTableHead';
import { UserOrdersTableBody } from './UserOrdersTableBody';
import { useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { apiUrl } from 'config';
import { ErrorResponse, OrderEntity } from 'types';
import { UserOrdersSkeleton } from 'components';

export const UsersOrderTable = () => {
  const [orders, setOrders] = useState<OrderEntity[] | null>(null);
  const [error, setError] = useState({
    message: '',
    status: 0,
  });

  const { user_id } = useParams();
  const [cookies] = useCookies(['token']);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${apiUrl}/user/${user_id}/orders`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookies.token}`,
        },
      });

      if (res.ok) {
        const data: OrderEntity[] = await res.json();
        setOrders(data);
      } else {
        const data: ErrorResponse = await res.json();
        if ('message' in data) {
          setError({
            message: data.message,
            status: data.status,
          });
        }
      }
    })();
  }, []);

  return (
    <>
      {error.status === 404 ? (
        error.message
      ) : orders !== null ? (
        <TableContainer sx={{ maxWidth: 600 }} component={Paper}>
          <Table size="small" aria-label="order summary table">
            <UserOrdersTableHead />
            <UserOrdersTableBody orders={orders} />
          </Table>
        </TableContainer>
      ) : (
        <UserOrdersSkeleton />
      )}
    </>
  );
};
