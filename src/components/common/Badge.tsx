import React from 'react';
import styled from 'styled-components';

const BadgeStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;

  width: fit-content;
  padding: 4px 8px;
  border-radius: 8px;
  color: var(--primary-color-600);

  svg {
    width: 1rem;
    height: 1rem;
  }

  &.primary {
    background-color: var(--primary-color-50);
  }

  &.white {
    background-color: var(--white-color);
  }

  &.small {
    svg {
      width: 0.75rem;
      height: 0.75rem;
    }

    p {
      font-size: 0.75rem;
      font-weight: 400;
    }
  }
`;

export type BadgeTypes = {
  color?: 'white' | 'primary';
  text: string;
  icon?: any; // svg component
};

const Badge: React.FC<BadgeTypes> = ({ color, text, icon }) => {
  return (
    <>
      <BadgeStyle className={`badge ${color || ''}`}>
        {icon}
        <p className="body3">{text}</p>
      </BadgeStyle>
    </>
  );
};

export default Badge;
