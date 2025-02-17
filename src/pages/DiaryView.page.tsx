import React, { useEffect } from "react";
import { useParams } from "react-router";
import { styled } from "styled-components";
import IconBadge from "../components/common/IconBadge";
import SectionHeader from "../components/common/SectionHeader";


import IcoCirckeRightArrow from '../assets/icons/ico-circle-right-arrow.svg?react';
import { DefaultCardStyle, FormCardStyle, ListItemCardStyle } from "../components/styles/Card.style";



const DiaryContentWrap = styled.div`
  .badge {
    margin-bottom: 0.75rem;
  }
`;

const DiaryContentCard = styled(DefaultCardStyle)`
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
  width: 100%;
  text-align: right;
  color: var(--gray-color-500);
`;

const AiCorrectionCard = styled(DefaultCardStyle)``;

const CorrectionItem = styled.li`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  .subtitle {
    display: block;
    width: fit-content;
  }

  .before-correction {
    color: var(--gray-color-500);
  }

  .after-correction {
    margin-top: 0.25rem;
  }

  .detail-correction {
    margin-top: 0.75rem;
  }

  em {
    color: var(--primary-color-500);
    font-style: normal;
  }
`;

const AskFormCard = styled(FormCardStyle)`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 0.75rem;

  textarea {
    min-height: 50px;
    height: auto;
    field-sizing: content;
  }
`;

const AskFormCardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const AskHistoryList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const AskHistoryCard = styled(ListItemCardStyle)`
.subtitle{
  margin-bottom: 0.75rem;
}
`;

function DiaryViewPage() {
  const params = useParams();
  const diaryId = params.diaryId;

  useEffect(() => {
    console.log("params: ", params);
  }, []);

  return (
    <>
      {/*  */}
      <section style={{ marginTop: "2rem" }}>
        <DiaryContentWrap>
          <IconBadge color="primary" />
          <DiaryContentCard>
            <h3>A Coffee Break with Siphon Magic</h3>
            <p className="caption">25.01.29. Thu</p>
            <DiaryContent className="body1">
              I just wanted to <em>lift my mood</em>, so I decided to grab a coffee. I'd been wanting to visit that café ever since I discovered it. They serve Siphon Coffee, and I really wanted to try it. <br/><br/>
              It was really nice. It was quiet and the music was so calm. I think this place is good to focus on something. Oh! They have a rewards system, and they give out a lot of points.<br/><br/>
              Did you see that Siphon Coffee maker? It was used to make my coffee. The coffee bean that I had was really good, and I wanted to buy it. And I wanted to come with my mom someday. She loves coffee. 
            </DiaryContent>
            <WordCounter className="body3">535/1000</WordCounter>
          </DiaryContentCard>
        </DiaryContentWrap>
      </section>
      {/* AI correction */}
      <section style={{ marginTop: "2rem" }}>
        <SectionHeader title={"AI Corrections"} />
        <AiCorrectionCard>
          <ol>
            <CorrectionItem>
              <div className="subtitle">1.</div>
              <div className="content">
                <div className="subtitle">
                  <div className="before-correction">
                    {`I just wanted to refresh my mood, so I decided to grab a coffee.`}
                  </div>
                  <div className="after-correction">
                    → I just wanted to <em>lift my mood</em>, so I decided to grab a coffee.
                  </div>
                </div>
                <p className="detail-correction">
                  "Refresh my mood"는 자연스럽지 않으며, "lift my mood"가 더 적절한 표현입니다.
                </p>
              </div>
            </CorrectionItem>
          </ol>
        </AiCorrectionCard>
      </section>
      {/* Ask to AI section */}
      <section style={{ marginTop: "2rem" }}>
        <SectionHeader title={"Ask"} counter="0/3" desc="You can ask a total of three questions per journal." />
        <AskFormCard>
          <textarea name="" id="" className="body1" placeholder="Pleas ask about English!" ></textarea>
          <WordCounter className="body3">
            535/1000
          </WordCounter>
          <AskFormCardFooter>
            <IcoCirckeRightArrow color="var(--gray-color-500)"/>

          </AskFormCardFooter>
        </AskFormCard>
        <AskHistoryList>
          <AskHistoryCard>
            <h3 className="subtitle">lift my mood가 무슨 뜻이야?</h3>
            <p>
              "lift my spirits"는 기분을 좋게 만들거나 기분을 회복시키는 것을 의미해요. "기분을 띄 우다"라고 번역할 수 있습니다. "refresh my mood"와 비슷한 의미로 사용되는 표현 이에요.
            </p>
          </AskHistoryCard>
        </AskHistoryList>
      </section>
    </>
  );
}
export default DiaryViewPage;
