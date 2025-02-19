import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router';
import DiaryCard from '../components/home/DiaryCard';
import HomeCalendar from '../components/home/HomeCalendar';
import { differenceInCalendarDays, format } from 'date-fns';

const CalSection = styled.section`
  background-color: var(--white-color);
`;

const DiaryListSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 100%;
`;

const DiaryList = styled.ul``;

function HomePage() {
  const today = new Date();
  const [selectedDate, setSelectedDate]: [Date, any] = useState(today);

  useEffect(() => {}, []);

  return (
    <>
      <CalSection>
        <HomeCalendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </CalSection>

      <DiaryListSection>
        <DiaryList>
          <DiaryCard
            today={today}
            date={selectedDate}
            diaryId={null}
            title={''}
            preview={''}
          />
        </DiaryList>
      </DiaryListSection>
    </>
  );
}

export default HomePage;
