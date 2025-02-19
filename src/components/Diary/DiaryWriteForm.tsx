import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import { DefaultCardStyle } from '../styles/Card.style';
import DiaryBtnGroup from './DiaryBtnGroup';

const DiaryWriteFormStyle = styled.form`
  margin: 2rem 0;
`;

const WordCounter = styled.div`
  width: 100%;
  text-align: right;
  color: var(--gray-color-500);
`;

const DiaryWriteCard = styled(DefaultCardStyle)`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-width: 335px;

  textarea {
    min-height: 100px;
    height: auto;
    field-sizing: content;
  }
`;

const DiaryWriteForm: React.FC<{
  diaryTitle: string;
  diaryContent: string;
  writeMode: boolean;
}> = ({ writeMode }) => {
  const location = useLocation();
  const loState = location.state;

  const defaultTitle = 'Diary of 25.01.29 Thu';
  const maxCharCount = 1000;

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [charCount, setCharCount] = useState([...content].length);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setContent(value);
    setCharCount([...value].length); // 유니코드 문자 개수를 정확히 계산
  };

  return (
    <DiaryWriteFormStyle>
      <DiaryWriteCard>
        <h3>
          <input
            type="text"
            id="diaryTitle"
            name="diaryTitle"
            value={title}
            placeholder={defaultTitle}
            onChange={(e) => setTitle(e.target.value)}
            disabled={!writeMode}
          />
        </h3>
        <p className="caption diary-date">25.01.29 Thu</p>
        <textarea
          name="diaryContent"
          id="diaryContent"
          placeholder="영어 일기를 입력해주세요."
          className="body1"
          value={content}
          onChange={(e) => handleChange(e)}
          disabled={!writeMode}
        />

        <WordCounter className="body3">
          {charCount}/{maxCharCount}
        </WordCounter>
      </DiaryWriteCard>

      {/* button group */}
      {writeMode ? (
        <DiaryBtnGroup mode={'write'} active={Boolean(content.length)} />
      ) : (
        <DiaryBtnGroup mode={'saved'} active={Boolean(content.length)} />
      )}
    </DiaryWriteFormStyle>
  );
};

export default DiaryWriteForm;
