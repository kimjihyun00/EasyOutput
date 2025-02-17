import React from 'react';
import { styled } from 'styled-components';
import InfoDesc from './InfoDesc';

const SectionHeaderStyle = styled.div`
  padding: 1rem 0;

  .title-wrap {
    * { 
      display: inline-block;
    }
    h3 {
      margin-right: 0.5rem;
    }
    .counter {
      color: var(--gray-color-500);
    }
  }
  .title-wrap + .info-desc {
    margin-top: 0.5rem;
  }
`;


type SectionHeaderProps = {
  title: string;
  desc?: string;
  counter?: string;
};

function SectionHeader(props: SectionHeaderProps) {
  return (
    <SectionHeaderStyle>
      <div className='title-wrap'>
        <h3>{props.title}</h3>
        {props.counter && <div className="body3 counter">{props.counter}</div>}
      </div>
      
      {/* 설명 출력 */}
      {props.desc && (
        <InfoDesc desc={props.desc} />
      )}
    </SectionHeaderStyle>
  );
}

export default SectionHeader;
