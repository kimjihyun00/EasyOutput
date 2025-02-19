/**
 * 사전 정의된 뱃지 아이콘들 넣는 곳.
 */

import IcoThreeStars from '../../assets/icons/ico-three-stars.svg?react';
import IcoNotes from '../../assets/icons/ico-notes.svg?react';

import Badge, { BadgeTypes } from './Badge';

export const AiCheckedBadge: React.FC<Omit<BadgeTypes, 'icon' | 'text'>> = ({
  color,
}) => {
  return (
    <Badge
      text={'AI checked'}
      icon={<IcoThreeStars />}
      color={color || 'primary'}
    />
  );
};

export const OriginalBadge: React.FC<Omit<BadgeTypes, 'icon' | 'text'>> = ({
  color,
}) => {
  return (
    <Badge text={'Original'} icon={<IcoNotes />} color={color || 'white'} />
  );
};
