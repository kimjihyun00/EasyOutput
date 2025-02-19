import React from 'react';
import styled from 'styled-components';

export const IconBtn = styled.button<{
  $fill?: boolean;
}>`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  width: ${(props) => (props.$fill ? '100%' : 'fit-content')};
`;
