import React from "react";
import styled from "styled-components";

import icoThreeStarsUrl from "../../assets/icons/ico-three-stars.svg";

const IconBadgeStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;

  width: fit-content;
  padding: 4px 8px;
  border-radius: 8px;
  color: var(--primary-color-600);

  img {
    display: inline-block;
    width: 1rem;
    height: 1rem;
  }

  &.primary {
    background-color: var(--primary-color-50);
  }

  &.small {
    img {
      display: inline-block;
      width: 0.75rem;
      height: 0.75rem;
    }

    p {
      font-size: 0.75rem;
      font-weight: 400;
    }
  }
`;

type IconBadgeProps = {
  color?: "white" | "primary";
};

function IconBadge(props: IconBadgeProps) {
  return (
    <>
      <IconBadgeStyle className={`badge ${props.color || ""}`}>
        <img src={icoThreeStarsUrl} alt="List" />
        <p className="body3">AI checked</p>
      </IconBadgeStyle>
    </>
  );
}

export default IconBadge;
