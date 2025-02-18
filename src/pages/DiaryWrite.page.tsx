import React, { useEffect } from 'react';
import styled from 'styled-components';
import PopupCard from '../components/common/PopupCard';
import { IconBtn } from '../components/common/IconBtn';

import IcoAutoRenew from '../assets/icons/ico-auto-renew.svg?react';
import IcoCircleCheckOutline from '../assets/icons/ico-circle-check-outline.svg?react';
import IcoEditNote from '../assets/icons/ico-edit-note.svg?react';
import IcoThreeStars from '../assets/icons/ico-three-stars.svg?react';

import {
  DefaultCardStyle,
  FormCardStyle,
} from '../components/styles/Card.style';

const DiaryWriteForm = styled.form`
  margin: 2rem 0;
`;

const WordCounter = styled.div`
  width: 100%;
  text-align: right;
  color: var(--gray-color-500);
`;

const DiaryWriteCard = styled(DefaultCardStyle)`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-width: 335px;

  textarea {
    min-height: 100px;
    height: auto;
    field-sizing: content;
  }
`;

const DiaryWriteBtnGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 2rem 0;
`;

function DiaryWritePage() {
  const defaultTitle = 'Diary of 25.01.29 Thu';
  return (
    <>
      {/* Topic recommend */}
      <PopupCard>
        <p className="body1">
          What is one thing that always makes you feel better when you're down?
        </p>
        <div
          className="popup-footer"
          style={{ color: 'var(--gray-color-500)' }}
        >
          <IconBtn>
            <IcoAutoRenew />
            <p className="body3">change subject</p>
          </IconBtn>
        </div>
      </PopupCard>

      <DiaryWriteForm action="" id="" name="">
        {/* Textarea */}
        <DiaryWriteCard>
          <h3>
            <input
              type="text"
              name=""
              id=""
              value={defaultTitle}
              placeholder={defaultTitle}
            />
          </h3>

          <p className="caption diary-date">25.01.29 Thu</p>
          <textarea
            name=""
            id=""
            placeholder="영어 일기를 입력해주세요."
            className="body1"
          ></textarea>

          <WordCounter className="body3">535/1000</WordCounter>
        </DiaryWriteCard>

        {/* button group */}
        <DiaryWriteBtnGroup>
          <DefaultCardStyle>
            <IconBtn>
              <IcoCircleCheckOutline />
              <p className="body1">저장하기</p>
            </IconBtn>
          </DefaultCardStyle>

          <DefaultCardStyle>
            <IconBtn>
              <IcoEditNote />
              <p className="body1">수정하기</p>
            </IconBtn>
          </DefaultCardStyle>

          <DefaultCardStyle>
            <IconBtn>
              <IcoThreeStars />
              <p className="body1">AI에게 첨삭 받기</p>
            </IconBtn>
          </DefaultCardStyle>
        </DiaryWriteBtnGroup>
      </DiaryWriteForm>
    </>
  );
}

export default DiaryWritePage;
