import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router';
import AskToAi from './AskToAi';
import CorrectionListCard from './CorrectionListCard';
import DiaryContentCard from './DiaryContentCard';
import { AiCheckedBadge, OriginalBadge } from '../common/DefinedBadges';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import styled from 'styled-components';
import { DefaultCardStyle } from '../styles/Card.style';
import SectionHeader from '../common/SectionHeader';

const DiaryContentWrap = styled.div`
  .badge {
    margin-bottom: 0.75rem;
  }
`;

const AiCorrectionCard = styled(DefaultCardStyle)`
  padding: 1.25rem 1rem;
`;

const CarouselContainer = styled.div`
  max-width: 335px;
  .swiper {
    padding-bottom: 40px; /* <-- added to show to bullets, other way they are hidden */
  }
`;

const DiaryCorrectedPage: React.FC<{}> = () => {
  const location = useLocation();
  const params = useParams();
  const diaryId = params.diaryId;

  useEffect(() => {
    console.log(location.state);
  }, []);

  return (
    <>
      <section style={{ marginTop: '2rem' }}>
        <CarouselContainer>
          <Swiper
            spaceBetween={32}
            modules={[Pagination]}
            pagination={{
              clickable: true,
            }}
          >
            <SwiperSlide>
              {/* 첨삭 완료된 글 */}
              <DiaryContentWrap>
                <AiCheckedBadge />
                <DiaryContentCard />
              </DiaryContentWrap>
            </SwiperSlide>

            <SwiperSlide>
              {/* 오리지날 */}
              <DiaryContentWrap>
                <OriginalBadge />
                <DiaryContentCard />
              </DiaryContentWrap>
            </SwiperSlide>
          </Swiper>
        </CarouselContainer>
      </section>

      {/* AI correction */}
      <section style={{ marginTop: '2rem' }}>
        <SectionHeader title={'AI 첨삭'} />
        <AiCorrectionCard>
          <CorrectionListCard corrections={['히히']} />
        </AiCorrectionCard>
      </section>

      {/* Ask to AI section */}
      <section style={{ marginTop: '2rem' }}>
        <AskToAi />
      </section>
    </>
  );
};

export default DiaryCorrectedPage;
