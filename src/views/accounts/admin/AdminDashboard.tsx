import React, { useEffect, useState } from 'react';
import { Loader, SectionHeader, SectionWrapper, SubPageWrapper, LogOutBtn } from 'components';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import { ManageButtons } from './ManageButtons';
import { useCookies } from 'react-cookie';
import { apiUrl } from 'config';
import { AdminEntityResponse, ErrorResponse } from 'types';
import { ErrorView } from '../../error';

export const AdminDashboard = () => {
  const { admin_id } = useParams();

  const [admin, setAdmin] = useState<AdminEntityResponse | null>(null);
  const [error, setError] = useState({
    message: '',
    status: 0,
  });

  const [cookies] = useCookies(['token']);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${apiUrl}/admin/${admin_id}/dashboard`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookies.token}`,
        },
      });

      if (res.ok) {
        const data: AdminEntityResponse = await res.json();
        setAdmin(data);
      } else {
        const data: ErrorResponse = await res.json();
        if ('message' in data) {
          setError({
            message: data.message,
            status: data.status,
          });

          console.log(data.message);
        }
      }
    })();
  }, []);

  return (
    <>
      {!admin && !error ? (
        <Loader />
      ) : !admin && error ? (
        <ErrorView errorMessage={error.message} status={error.status} />
      ) : (
        <SectionWrapper classes="admin__dashboard">
          <SectionHeader>Admin dashboard</SectionHeader>
          <SubPageWrapper>
            <Typography>
              Managing app as: <br /> admin <b>{admin && admin.adminId}</b>
            </Typography>
            <ManageButtons />
            <LogOutBtn />
          </SubPageWrapper>
        </SectionWrapper>
      )}
    </>
  );
};
