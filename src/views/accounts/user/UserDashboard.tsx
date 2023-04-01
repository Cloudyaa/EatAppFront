import React, { useEffect, useState } from 'react';
import { SafeUserEntity, ErrorResponse } from 'types';
import { apiUrl } from 'config';
import { useNavigate, useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { ButtonFull, SectionHeader, SectionWrapper, SubPageWrapper } from 'components';
import { Box } from '@mui/material';
import { ErrorView } from '../../error';

export const UserDashboard = () => {
  const [user, setUser] = useState<SafeUserEntity | null>(null);
  const [error, setError] = useState({
    message: '',
    status: 0,
  });

  const { user_id } = useParams();
  const navigate = useNavigate();

  const [cookies, setCookie, removeCookie] = useCookies();

  useEffect(() => {
    (async () => {
      const res = await fetch(`${apiUrl}/user/${user_id}/dashboard`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookies.token}`,
        },
      });

      if (res.ok) {
        const data: SafeUserEntity = await res.json();

        setUser(data);
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

  const handleLogout = () => {
    removeCookie('token', { path: '/' });
    navigate('/');
  };

  return (
    <SectionWrapper classes="user__dashboard">
      {!user ? (
        <ErrorView errorMessage={error.message} status={error.status} />
      ) : (
        <>
          <SectionHeader>My account</SectionHeader>
          <SubPageWrapper>
            <p>Created at: {user.createdAt}</p>
            <Box sx={{ maxWidth: '40ch' }}>
              <ButtonFull onClick={handleLogout}>Log out</ButtonFull>
            </Box>
          </SubPageWrapper>
        </>
      )}
    </SectionWrapper>
  );
};
