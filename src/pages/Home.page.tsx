import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router";
import DiaryCard from "../components/home/DiaryCard";
import HomeCalendar from "../components/home/HomeCalendar";

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
  const navigate = useNavigate();

  return (
    <>
      <CalSection>
        <HomeCalendar />
      </CalSection>

      <DiaryListSection>
        <DiaryList>
            <DiaryCard diaryId={null} title={""} date={"25.01.30 Thu"} preview={""} />
        </DiaryList>
      </DiaryListSection>
    </>
  );
}

export default HomePage;
