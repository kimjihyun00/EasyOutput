import React from 'react';
import TopicRecommendPopup from './TopicRecommendPopup';
import DiaryWriteForm from './DiaryWriteForm';

const DiaryEditablePage: React.FC<{}> = () => {
  return (
    <>
      <TopicRecommendPopup />
      <DiaryWriteForm diaryTitle={''} diaryContent={''} writeMode={false} />
    </>
  );
};

export default DiaryEditablePage;
