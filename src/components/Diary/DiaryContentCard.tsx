import React, { useEffect } from 'react';
import styled from 'styled-components';
import { DefaultCardStyle } from '../styles/Card.style';

const DiaryContentCardWrap = styled(DefaultCardStyle)`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const DiaryContent = styled.pre`
  width: 100%;
  white-space: pre-wrap;

  em {
    color: var(--primary-color-500);
    font-style: normal;
  }
`;

const WordCounter = styled.div`
  text-align: right;
  color: var(--gray-color-500);
`;

const DiaryContentCard: React.FC<{}> = () => {
  return (
    <DiaryContentCardWrap>
      <h3>A Coffee Break with Siphon Magic</h3>
      <p className="caption">25.01.29. Thu</p>
      <DiaryContent className="body1">
        I just wanted to <em>lift my mood</em>, so I decided to grab a coffee.
        I'd been wanting to visit that café ever since I discovered it. They
        serve Siphon Coffee, and I really wanted to try it. <br />
        <br />
        It was really nice. It was quiet and the music was so calm. I think this
        place is good to focus on something. Oh! They have a rewards system, and
        they give out a lot of points.
        <br />
        <br />
        Did you see that Siphon Coffee maker? It was used to make my coffee. The
        coffee bean that I had was really good, and I wanted to buy it. And I
        wanted to come with my mom someday. She loves coffee.
      </DiaryContent>
      <WordCounter className="body3">535/1000</WordCounter>
    </DiaryContentCardWrap>
  );
};

export default DiaryContentCard;
