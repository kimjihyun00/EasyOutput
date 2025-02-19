import React from 'react';

import { Outlet } from 'react-router';
import styled from 'styled-components';
import Header from '../components/common/Header';

const RootBody = styled.div`
  padding: 20px;
  min-height: 100vh;
`;

function PlainLayout() {
  return (
    <>
      <RootBody>
        <Outlet />
      </RootBody>
    </>
  );
}

export default PlainLayout;
