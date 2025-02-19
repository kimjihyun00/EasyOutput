import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router';
import DiaryWriteForm from '../components/Diary/DiaryWriteForm';
import DiaryCorrectedPage from '../components/Diary/DiaryCorrected';

function DiaryViewPage() {
  const location = useLocation();
  const params = useParams();
  const diaryId = params.diaryId;
  const corrected = location.state?.corrected || false;

  useEffect(() => {
    console.log('diaryId: ', diaryId);
    console.log('state: ', location.state);
  }, []);

  return (
    <>
      {corrected ? (
        <DiaryCorrectedPage />
      ) : (
        <DiaryWriteForm diaryTitle={''} diaryContent={''} writeMode={false} />
      )}
    </>
  );
}
export default DiaryViewPage;
