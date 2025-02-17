import React, { useEffect } from 'react';
import styled from 'styled-components';

export const DefaultCardStyle = styled.div`
  background-color: var(--white-color);
  border-radius: var(--default-border-radius);
  padding: 1rem;
  max-width: 335px;
`;

export const ListItemCardStyle = styled.li`
  background-color: var(--white-color);
  border-radius: var(--default-border-radius);
  padding: 1rem;
  max-width: 335px;
`;

export const FormCardStyle = styled.form`
  background-color: var(--white-color);
  border-radius: var(--default-border-radius);
  padding: 1rem;
  max-width: 335px;
  * {
    display: block;
  }
`;
