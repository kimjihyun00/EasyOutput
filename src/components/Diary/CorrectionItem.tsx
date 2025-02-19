import React, { useEffect } from 'react';
import styled from 'styled-components';

const CorrectionItemWrap = styled.li`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  .subtitle {
    display: block;
    width: fit-content;
  }

  .original {
    color: var(--gray-color-500);
  }

  .correction {
    margin-top: 0.25rem;
  }

  .description {
    margin-top: 0.75rem;
  }

  em {
    color: var(--primary-color-500);
    font-style: normal;
  }
`;

const CorrectionItem: React.FC<{
  index: number;
  original: string;
  correction: string;
  description: string;
}> = ({ index, original, correction, description }) => {
  return (
    <CorrectionItemWrap key={index + original.slice(0, 3)}>
      <div className="subtitle">{index}.</div>
      <div className="content">
        <div className="subtitle">
          <div className="original">{original}</div>
          <div className="correction">
            → {correction}
            {/* 강조부분 em 감싸기 */}
          </div>
        </div>
        <p className="description">{description}</p>
      </div>
    </CorrectionItemWrap>
  );
};

export default CorrectionItem;
