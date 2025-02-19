import React, { useEffect } from 'react';
import styled from 'styled-components';
import { IconBtn } from '../common/IconBtn';
import { DefaultCardStyle } from '../styles/Card.style';

import IcoCircleCheckOutline from '../../assets/icons/ico-circle-check-outline.svg?react';
import IcoCircleCheckFilled from '../../assets/icons/ico-circle-check-filled.svg?react';
import IcoEditNote from '../../assets/icons/ico-edit-note.svg?react';
import IcoThreeStars from '../../assets/icons/ico-three-stars.svg?react';

const DiaryBtnGroupStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 2rem 0;
`;

const DiaryBtnGroup: React.FC<{
  mode: 'write' | 'saved';
  active?: boolean;
}> = ({ mode, active }) => {
  return (
    <DiaryBtnGroupStyle>
      {mode == 'write' ? (
        <DefaultCardStyle>
          <IconBtn $fill={true}>
            {active ? <IcoCircleCheckFilled /> : <IcoCircleCheckOutline />}
            <p className="body1">저장하기</p>
          </IconBtn>
        </DefaultCardStyle>
      ) : (
        <>
          <DefaultCardStyle>
            <IconBtn onClick={(e) => null}>
              <IcoEditNote />
              <p className="body1">수정하기</p>
            </IconBtn>
          </DefaultCardStyle>

          <DefaultCardStyle>
            <IconBtn onClick={(e) => null}>
              <IcoThreeStars />
              <p className="body1">AI에게 첨삭 받기</p>
            </IconBtn>
          </DefaultCardStyle>
        </>
      )}
    </DiaryBtnGroupStyle>
  );
};
export default DiaryBtnGroup;
