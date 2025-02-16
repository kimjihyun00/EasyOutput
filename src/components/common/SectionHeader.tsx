import React from 'react';
import { styled } from 'styled-components';

const SectionHeaderStyle = styled.div`
  padding: 1rem 0;
`;

type SectionHeaderProps = {
  title: string;
  desc?: string;
  counter?: string;
};

function SectionHeader(props: SectionHeaderProps) {
  return (
    <SectionHeaderStyle>
      <h3>{props.title}</h3>
      {props.counter && <div className="body3">{props.counter}</div>}
      {/* 설명 출력 */}
    </SectionHeaderStyle>
  );
}

export default SectionHeader;
