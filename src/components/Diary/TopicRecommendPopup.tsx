import React, { useEffect } from 'react';
import PopupCard from '../common/PopupCard';
import { IconBtn } from '../common/IconBtn';

import IcoAutoRenew from '../../assets/icons/ico-auto-renew.svg?react';

const TopicRecommendPopup = () => {
  return (
    <PopupCard>
      <p className="body1">
        What is one thing that always makes you feel better when you're down?
      </p>
      <div className="popup-footer" style={{ color: 'var(--gray-color-500)' }}>
        <IconBtn>
          <IcoAutoRenew />
          <p className="body3">change subject</p>
        </IconBtn>
      </div>
    </PopupCard>
  );
};

export default TopicRecommendPopup;
