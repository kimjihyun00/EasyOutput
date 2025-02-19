import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CorrectionItem from './CorrectionItem';

const CorrectionListWrap = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const CorrectionListCard: React.FC<{
  corrections: any[];
}> = ({ corrections }) => {
  return (
    <CorrectionListWrap>
      {corrections.map((correction, i) => (
        <CorrectionItem
          index={i + 1}
          original={correction}
          correction={'헤헤'}
          description={''}
        />
      ))}
    </CorrectionListWrap>
  );
};

export default CorrectionListCard;
