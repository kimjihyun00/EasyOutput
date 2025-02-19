import React, { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  format,
  isSameDay,
} from 'date-fns';
import Badge from '../common/Badge';

const CalendarWrap = styled.div`
  margin: 0 auto;
  padding: 20px;
  max-width: 335px;
  min-height: 240px;
`;

const CalendarHeader = styled.div`
  margin-bottom: 1.5rem;
`;

const CalendarContainer = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.75rem;
  text-align: center;
`;

const WeekDay = styled.div<{
  $weekend?: boolean;
}>`
  font-weight: bold;
  width: 2rem;
  padding: 2px 0;
  color: ${(props) =>
    props.$weekend ? 'var(--gray-color-300)' : 'var(--black-color)'};
`;

const Day = styled.div<{
  $selected?: boolean;
  $hasDiary?: boolean;
  $visibility?: boolean;
}>`
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  border-radius: 50%;
  background-color: ${(props) =>
    props.$selected
      ? 'var(--red-color-light)'
      : props.$hasDiary
      ? 'var(--primary-color-50)'
      : 'transparent'};
  border: ${(props) =>
    props.$hasDiary ? 'none' : '1px dashed var(--gray-color-100)'};
  visibility: ${({ $visibility }) => ($visibility ? 'visible' : 'hidden')};
`;

const HomeCalendar: React.FC<{
  selectedDate: Date;
  setSelectedDate: any;
}> = ({ selectedDate, setSelectedDate }) => {
  const startMonth = +format(selectedDate, 'M') - 1;

  const firstDayOfMonth = startOfMonth(selectedDate);
  const lastDayOfMonth = endOfMonth(firstDayOfMonth);
  const firstDayOfCalendar = startOfWeek(firstDayOfMonth);
  const lastDayOfCalendar = endOfWeek(lastDayOfMonth);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleOpenPicker = () => {
    if (inputRef.current) {
      inputRef.current.showPicker(); // 최신 브라우저에서 사용 가능
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('> pick', event.target.value);
    setSelectedDate(event.target.value);
  };

  const days = eachDayOfInterval({
    start: firstDayOfCalendar,
    end: lastDayOfCalendar,
  });

  useEffect(() => {}, []);

  const renderDay = (day: Date) => {
    let isThisMonth: boolean = day.getMonth() === startMonth;

    return (
      <Day
        className={'body1'}
        key={day.toString()} // 키 값
        $visibility={isThisMonth} // 이번달 날짜가 아님
        $selected={isSameDay(selectedDate, day)} // 선택됨
        $hasDiary={false} // 작성된 일기가 있음
        onClick={() => setSelectedDate(day)}
      >
        {isThisMonth ? format(day, 'd') : ''}
      </Day>
    );
  };

  return (
    <CalendarWrap>
      <CalendarHeader>
        <label htmlFor="yearMonth" onClick={handleOpenPicker}>
          <p className="body3">{format(selectedDate, 'yyyy')}</p>
          <h2>{format(selectedDate, 'MMMM')}</h2>
          <input
            type="month"
            id="yearMonth"
            name="yearMonth"
            ref={inputRef}
            value={format(selectedDate, 'yyyy-MM')}
            onChange={handleChange}
            style={{ display: 'none' }}
          />
        </label>
        {/* <Badge text={'오늘'} color="primary" /> */}
      </CalendarHeader>
      <CalendarContainer>
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
          <WeekDay key={day} $weekend={day == 'S'} className="body3">
            {day}
          </WeekDay>
        ))}
        {days.map((day) => renderDay(day))}
      </CalendarContainer>
    </CalendarWrap>
  );
};

export default HomeCalendar;
