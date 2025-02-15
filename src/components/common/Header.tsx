import React from 'react';
import styled from 'styled-components';

const TopNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 60px;
  padding: 10px 20px;
  background-color: var(--white-color);
`;

const IconBtn = styled.button`
  img {
    display: block;
  }
`;

function Header() {
  return (
    <TopNav>
      <IconBtn>
        <img src={'/assets/icons/ico-list.svg'} alt="List" />
      </IconBtn>

      <IconBtn>
        <img src={'/assets/icons/ico-profile.svg'} alt="Mypage" />
      </IconBtn>

      {/* <IconBtn>
        <img src={'/assets/icons/ico-left-arrow.svg'} alt="Back" />
      </IconBtn> */}
    </TopNav>
  );
}

export default Header;
