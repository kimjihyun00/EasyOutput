import React from 'react';

import Header from 'components/common/Header';
import { Outlet } from 'react-router';
import styled from 'styled-components';

const LootBody = styled.div`
  padding: 20px;
`;

function MainLayout() {
  return (
    <>
      <Header />
      <LootBody>
        <Outlet />
      </LootBody>
    </>
  );
}

export default MainLayout;
