import React from "react";

import { Outlet } from "react-router";
import styled from "styled-components";
import Header from "../components/common/Header";

const RootBody = styled.div`
  width: fit-content;
  padding: 20px;
  min-height: 100%;
  margin: 0 auto;
  margin-bottom: 3.75rem;
`;

function PageLayout() {
  return (
    <>
      <Header type="page" />
      <RootBody>
        <Outlet />
      </RootBody>
    </>
  );
}

export default PageLayout;
