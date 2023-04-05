import React, { useEffect, useState } from 'react';
import { SafeUserEntity, ErrorResponse } from 'types';
import { apiUrl } from 'config';
import { useNavigate, useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { Box } from '@mui/material';
import { ButtonFull, SectionHeader, SectionWrapper, SubPageWrapper } from 'components';
import { UsersOrderTable } from './UserOrdersTable';
import { ErrorView } from '../../error';

export const UserDashboard = () => {
  const [user, setUser] = useState<SafeUserEntity | null>(null);
  const [error, setError] = useState({
    message: '',
    status: 0,
  });

  const { user_id } = useParams();
  const navigate = useNavigate();

  const [cookies, , removeCookie] = useCookies();

  useEffect(() => {
    (async () => {
      const userRes = await fetch(`${apiUrl}/user/${user_id}/dashboard`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookies.token}`,
        },
      });

      if (userRes.ok) {
        const data: SafeUserEntity = await userRes.json();
        setUser(data);
      } else {
        const data: ErrorResponse = await userRes.json();
        if ('message' in data) {
          setError({
            message: data.message,
            status: data.status,
          });
        }
      }
    })();
  }, []);

  const handleLogout = () => {
    removeCookie('token', { path: '/' });
    navigate('/');
  };

  return (
    <>
      {!user ? (
        <ErrorView errorMessage={error.message} status={error.status} />
      ) : (
        <SectionWrapper classes="user__dashboard">
          <>
            <SectionHeader>Hello {user.email.split('@')[0]}</SectionHeader>
            <SubPageWrapper>
              <h3>Your orders</h3>
              <UsersOrderTable />
              <Box sx={{ maxWidth: '40ch' }}>
                <ButtonFull onClick={handleLogout}>Log out</ButtonFull>
              </Box>
            </SubPageWrapper>
          </>
        </SectionWrapper>
      )}
    </>
  );
};
