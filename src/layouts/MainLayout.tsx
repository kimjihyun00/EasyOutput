import React from 'react';

import Header from 'components/common/Header';
import { Outlet } from 'react-router';
import styled from 'styled-components';

const RootBody = styled.div`
  /* padding: 20px; */
  min-height: 100%;
`;

function MainLayout() {
  return (
    <>
      <Header />
      <RootBody>
        <Outlet />
      </RootBody>
    </>
  );
}

export default MainLayout;
