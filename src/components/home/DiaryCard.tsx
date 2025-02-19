import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import IconBadge from '../common/Badge';

import IcoCircleAdd from '../../assets/icons/ico-circle-add.svg?react';
import { ListItemCardStyle } from '../styles/Card.style';
import { differenceInCalendarDays, format } from 'date-fns';
import { AiCheckedBadge } from '../common/DefinedBadges';

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

const DiartWriteBtn = styled.button<{
  $fill: boolean;
}>`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;
  width: ${(props) => (props.$fill ? '100%' : 'fit-content')};
`;

const DiaryCard: React.FC<{
  diaryId: string | null; // diaryId가 없을 경우 write mode
  title: string;
  today: Date;
  date: Date;
  preview: string;
  corrected?: boolean;
}> = ({ today, date, diaryId, title, preview, corrected = false }) => {
  const navigate = useNavigate();

  const diff = differenceInCalendarDays(today, date);
  let showBtn = false;

  useEffect(() => {}, []);

  const setTitle = (): string => {
    if (diaryId) {
      return title;
    }

    if (diff > 2) {
      // past
      return '3일후엔 일기를 쓸 수 없어요 😓';
    } else if (diff < 0) {
      // future
      return `D${diff} 남았어요`;
    }

    showBtn = true;
    return '💭 어떤 일이 있었나요?';
  };

  return (
    <DiaryCardListItem
      onClick={() => diaryId && navigate(`/diary/${diaryId}`)}
      className={diaryId ? 'cursor-pointer' : ''}
    >
      <div className="card-header">
        <p className="body3 date">{format(date, 'yyyy.MM.dd E')}</p>
        <h2>{setTitle()}</h2>
      </div>
      <div className="card-body">
        {corrected && <AiCheckedBadge />}
        {diaryId ? <p className="diary-preview">{preview}</p> : ''}
        {showBtn && (
          <DiartWriteBtn $fill={true} onClick={() => navigate('/diary/write')}>
            <IcoCircleAdd
              width={'1.5rem'}
              height={'1.5rem'}
              color="var(--primary-color-600)"
            />
            <p className="body1">일기 쓰기</p>
          </DiartWriteBtn>
        )}
      </div>
    </DiaryCardListItem>
  );
};

export default DiaryCard;
