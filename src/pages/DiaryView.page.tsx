import React, { useEffect } from "react";
import { useParams } from "react-router";
import { styled } from "styled-components";
import IconBadge from "../components/common/IconBadge";
import SectionHeader from "../components/common/SectionHeader";

const exText = `I just wanted to lift my mood, so I decided to grab a coffee. I'd been wanting to visit that café ever since I discovered it. They serve Siphon Coffee, and I really wanted to try it.

It was really nice. It was quiet and the music was so calm. I think this place is good to focus on something. Oh! They have a rewards system, and they give out a lot of points.

Did you see that Siphon Coffee maker? It was used to make my coffee. The coffee bean that I had was really good, and I wanted to buy it. And I wanted to come with my mom someday. She loves coffee. `;

const DiaryContentWrap = styled.div`
  .badge {
    margin-bottom: 0.75rem;
  }
`;

const DiaryContentCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background-color: var(--white-color);
  padding: 1rem;
  border-radius: var(--default-border-radius);
  max-width: 335px;
`;

const DiaryContent = styled.pre`
  display: block;
  width: 100%;
  white-space: pre-wrap;
`;

const WordCounter = styled.div`
  width: 100%;
  text-align: right;
  color: var(--gray-color-500);
`;

const AiCorrectionCard = styled.div`
  background-color: var(--white-color);
  padding: 1rem;
  border-radius: var(--default-border-radius);
  max-width: 335px;
`;

const CorrectionItem = styled.li`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  .subtitle {
    display: block;
    width: fit-content;
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
            <DiaryContent className="body1">{exText}</DiaryContent>
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
                  <div className="">
                    {`I'd been wanting to go to that cafe since I found it.`}
                  </div>
                  <div>
                    {`→ They serve Siphon Coffee, and I really wanted to try it.`}
                  </div>
                </div>
                <p>
                  {`"Refresh my mood"는 자연스럽지 않으며, "lift my mood"가 더 적절한 표현입니다.`}
                </p>
              </div>
            </CorrectionItem>
          </ol>
        </AiCorrectionCard>
      </section>
    </>
  );
}
export default DiaryViewPage;
