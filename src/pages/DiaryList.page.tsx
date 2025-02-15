import IconBadge from 'components/common/IconBadge';
import React from 'react';
import { styled } from 'styled-components';

const DiaryList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const DiaryListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px 16px;
  background-color: var(--white-color);
  border-radius: var(--default-border-radius);

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
          <IconBadge color="primary" />
          <h2 className="body1 title">
            Here is where the title of the journal should be. ournal should be.
          </h2>
          <p className="caption desc-text">2025.01.05 Thu</p>
        </DiaryListItem>
      </DiaryList>
    </>
  );
}
export default DiaryListPage;
