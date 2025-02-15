import IconBadge from 'components/common/IconBadge';
import React from 'react';
import styled from 'styled-components';

const CalSection = styled.section`
  background-color: var(--white-color);
  padding: 20px;

  .cal-body {
    width: 100%;
    height: 240px;
  }
`;

const DiaryListSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 100%;
`;

const DiaryCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-width: 280px;
  height: 280px;
  padding: 24px;
  background-color: var(--white-color);
  border-radius: var(--default-border-radius);

  .card-body {
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
  }
`;

function HomePage() {
  return (
    <>
      <CalSection>
        <div className="cal-header">
          <p className="body3">2025</p>
          <h2>January</h2>
        </div>
        <div className="cal-body">calendar</div>
      </CalSection>
      <DiaryListSection>
        <ul>
          <li>
            <DiaryCard>
              <div className="card-header">
                <p className="body3">25.01.30 (화)</p>
                <h2>제목이 들어오는 자리입니다.</h2>
              </div>
              <div className="card-body">
                <IconBadge color="primary" />
                <p className="diary-preview">
                  Here is where the content of the journal should be. Here is
                  where the content of the journal should be. Here is where the
                  content of the journal should be. Here is where the content of
                  the journal should be.
                </p>
              </div>
            </DiaryCard>
          </li>
        </ul>
      </DiaryListSection>
    </>
  );
}

export default HomePage;
