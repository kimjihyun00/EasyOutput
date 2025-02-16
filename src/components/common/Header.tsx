import React from "react";
import { Link, NavLink, useNavigate } from "react-router";
import styled from "styled-components";

import icoLeftArrowUrl from "../../assets/icons/ico-left-arrow.svg";
import icoListUrl from "../../assets/icons/ico-list.svg";
import icoProfileUrl from "../../assets/icons/ico-profile.svg";

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
      case "page":
        return (
          <IconBtn onClick={() => navigate(-1)}>
            <img src={icoLeftArrowUrl} alt="Back" />
          </IconBtn>
        );
      case "default":
      default:
        return (
          <>
            <IconBtn>
              <NavLink to={"/list"}>
                <img src={icoListUrl} alt="List" />
              </NavLink>
            </IconBtn>
            <IconBtn>
              <NavLink to={"/"}>
                <img src={icoProfileUrl} alt="Mypage" />
              </NavLink>
            </IconBtn>
          </>
        );
    }
  };

  return <TopNav>{renderNavButtons()}</TopNav>;
}

export default Header;
