import React, { ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';
import { DefaultCardStyle } from '../styles/Card.style';

import IcoCircleCancle from '../../assets/icons/ico-circle-cancle.svg?react';
import { IconBtn } from './IconBtn';

const PopupCardStyle = styled(DefaultCardStyle)`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  .popup-body {
  }

  svg {
    color: var(--gray-color-700);
    width: 1.25rem;
    height: 1.25rem;
  }

  .popup-footer {
    margin-top: 0.25rem;
  }
`;

type PopupCardProps = {
  children: any;
};

function PopupCard(props: PopupCardProps) {
  const [closed, setClosed] = useState(false);

  return (
    !closed && (
      <PopupCardStyle>
        <div className="popup-body">{props.children}</div>
        <IconBtn onClick={() => setClosed(true)}>
          <IcoCircleCancle />
        </IconBtn>
      </PopupCardStyle>
    )
  );
}

export default PopupCard;
