import React from 'react';
import { Link } from 'react-router';
import { styled } from 'styled-components';
import { AiCheckedBadge } from '../components/common/DefinedBadges';

const DiaryList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const DiaryListItem = styled.li`
  background-color: var(--white-color);
  border-radius: var(--default-border-radius);
  padding: 12px 16px;
  a {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .title {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* 라인수 */
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    max-height: 1.3em; /* 1.3em * 3 */
  }
`;

const MonthlyHeading = styled.h4`
  color: var(--gray-color-500);
  margin-top: 20px;
`;

function DiaryListPage() {
  return (
    <>
      <DiaryList>
        <MonthlyHeading className="subtitle">January</MonthlyHeading>
        <DiaryListItem>
          <Link to="/diary/1" state={{ corrected: false }}>
            <AiCheckedBadge />
            <h2 className="body1 title">
              Here is where the title of the journal should be. ournal should
            </h2>
            <p className="caption desc-text">2025.01.05 Thu</p>
          </Link>
        </DiaryListItem>
      </DiaryList>
    </>
  );
}
export default DiaryListPage;
