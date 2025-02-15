import React from 'react';
import { Link, useNavigate } from 'react-router';
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

type HeaderProps = {
  type?: string;
};

function Header({ type }: HeaderProps) {
  const navigate = useNavigate();

  const renderNavButtons = () => {
    switch (type) {
      case 'page':
        return (
          <IconBtn onClick={() => navigate(-1)}>
            <img src={'/assets/icons/ico-left-arrow.svg'} alt="Back" />
          </IconBtn>
        );
      case 'default':
      default:
        return (
          <>
            <IconBtn>
              <Link to={'/list'}>
                <img src={'/assets/icons/ico-list.svg'} alt="List" />
              </Link>
            </IconBtn>
            <IconBtn>
              <Link to={'/'}>
                <img src={'/assets/icons/ico-profile.svg'} alt="Mypage" />
              </Link>
            </IconBtn>
          </>
        );
    }
  };

  return <TopNav>{renderNavButtons()}</TopNav>;
}

export default Header;
