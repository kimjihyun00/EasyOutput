import React, { useEffect, useState } from 'react';

import TopicRecommendPopup from '../components/Diary/TopicRecommendPopup';
import DiaryWriteForm from '../components/Diary/DiaryWriteForm';

function DiaryWritePage() {
  return (
    <>
      <TopicRecommendPopup />
      <DiaryWriteForm diaryTitle={''} diaryContent={''} writeMode={true} />
    </>
  );
}

export default DiaryWritePage;
