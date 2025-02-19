import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ListItemCardStyle } from '../styles/Card.style';

const AskHistoryCardStyle = styled(ListItemCardStyle)`
  .subtitle {
    margin-bottom: 0.75rem;
  }
`;

type AskHistoryCardProps = {
  question: string;
  answer: string;
  isLoading: boolean;
};
const AskHistoryCard = (props: AskHistoryCardProps) => {
  return (
    <AskHistoryCardStyle>
      <h3 className="subtitle">{props.question}</h3>
      <p>{props.answer}</p>
    </AskHistoryCardStyle>
  );
};

export default AskHistoryCard;
