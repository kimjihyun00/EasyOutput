import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import IconBadge from '../common/IconBadge';

import IcoCircleAdd from '../../assets/icons/ico-circle-add.svg?react';
import { ListItemCardStyle } from '../styles/Card.style';

const DiaryCardListItem = styled(ListItemCardStyle)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-width: 280px;
  min-width: 280px;
  height: 280px;
  padding: 1.5rem;

  .date {
    margin-bottom: 0.25rem;
  }

  h2 {
  }
  .diary-preview {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* 라인수 */
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    max-height: 2.6em; /* 1.3em * 3 */
    margin-top: 1rem;
  }
`;

const DiartWriteBtn = styled.button`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

type DiaryCardProps = {
  diaryId: string | null; // diaryId가 없을 경우 write mode
  title: string;
  date: string;
  preview: string;
  corrected?: boolean;
};

function DiaryCard({
  date,
  diaryId,
  title,
  preview,
  corrected = false,
}: DiaryCardProps) {
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const isThreeDaysAgo = () => {
    // 3일 이상 지난 날짜일 경우 경고 문구 출력
  };

  const isFuture = () => {
    // 미래 날짜인 경우
  };

  return (
    <DiaryCardListItem
      onClick={() => diaryId && navigate(`/diary/${diaryId}`)}
      className={diaryId ? 'cursor-pointer' : ''}
    >
      <div className="card-header">
        <p className="body3 date">{date}</p>
        <h2>{diaryId ? title : '💭 어떤 일이 있었나요?'}</h2>
      </div>
      <div className="card-body">
        {corrected && <IconBadge color="primary" />}
        {diaryId ? <p className="diary-preview">{preview}</p> : ''}
        <DiartWriteBtn onClick={() => navigate('/diary/write')}>
          <IcoCircleAdd
            width={'1.5rem'}
            height={'1.5rem'}
            color="var(--primary-color-600)"
          />
          <p className="body1">일기 쓰기</p>
        </DiartWriteBtn>
      </div>
    </DiaryCardListItem>
  );
}

export default DiaryCard;
