import React from 'react';
import { styled } from 'styled-components';

import IcoInfo from '../../assets/icons/ico-info.svg?react';

const InfoDescWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
  color: var(--gray-color-500);
  img {
    width: 1.25rem;
    height: 1.25rem;
    display: block;
    fill: var(--gray-color-500);
  }
`;

type InfoDescriptionProps = {
  desc: string;
  size?: 'default' | 'small';
};

function InfoDesc(props: InfoDescriptionProps) {
  return (
    <InfoDescWrap className="info-desc">
      <IcoInfo
        width={'1.25rem'}
        height={'1.25rem'}
        color="var(--gray-color-500)"
      />
      <p className={props.size === 'small' ? 'caption' : 'body3'}>
        {props.desc}
      </p>
    </InfoDescWrap>
  );
}
export default InfoDesc;
