import React, { useEffect, useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import styled from 'styled-components';
import { FormCardStyle, ListItemCardStyle } from '../styles/Card.style';

import IcoCirckeRightArrow from '../../assets/icons/ico-circle-right-arrow.svg?react';
import AskHistoryCard from './AskHistoryCard';

const WordCounter = styled.div`
  width: 100%;
  text-align: right;
  color: var(--gray-color-500);
`;

const AskFormCard = styled(FormCardStyle)`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 0.75rem;

  textarea {
    min-height: 50px;
    height: auto;
    field-sizing: content;
  }
`;

const AskFormCardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const AskHistoryList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const AskToAi = () => {
  const [charCount, setCharCount] = useState(0);
  const [content, setContent] = useState('');
  const maxAskLength = 500;

  const handleAskChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setCharCount([...value].length);
    setContent(value);
  };

  return (
    <>
      <SectionHeader
        title={'Ask'}
        counter="0/3"
        desc="한 일기에 최대 3번만 질문 할 수 있어요."
      />
      <AskFormCard id="" name="">
        <textarea
          name=""
          id=""
          className="body1"
          placeholder={`ex) "I'd been wanting"이라고 고친 이유가 뭐야?`}
          value={content}
          onChange={(e) => handleAskChange(e)}
        />
        <WordCounter className="body3">
          {charCount}/{maxAskLength}
        </WordCounter>

        <AskFormCardFooter>
          <IcoCirckeRightArrow
            color={
              Boolean(content.length)
                ? 'var(--black-color)'
                : 'var(--gray-color-500)'
            }
          />
        </AskFormCardFooter>
      </AskFormCard>

      <AskHistoryList>
        <AskHistoryCard
          question="왜 이렇게함?"
          answer="이래서 그럼 저래서 그럼"
          isLoading={false}
        />
      </AskHistoryList>
    </>
  );
};

export default AskToAi;
