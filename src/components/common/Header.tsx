import React from "react";
import { Link, NavLink, useNavigate } from "react-router";
import styled from "styled-components";

import IcoLeftArrow from "../../assets/icons/ico-left-arrow.svg?react";
import IcoList from "../../assets/icons/ico-list.svg?react";
import IcoProfile from "../../assets/icons/ico-profile.svg?react";
import { IconBtn } from "./IconBtn";

const TopNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 60px;
  padding: 10px 20px;
  background-color: var(--white-color);

  svg {
    color: var(--black-color);
    width: 1.5rem;
    height: 1.5rem;
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
            {/* back */}
            <IcoLeftArrow />
          </IconBtn>
        );
      case "default":
      default:
        return (
          <>
            <IconBtn>
              <NavLink to={"/list"}>
                <IcoList  />
              </NavLink>
            </IconBtn>
            <IconBtn>
              <NavLink to={"/"}>
                <IcoProfile  />
              </NavLink>
            </IconBtn>
          </>
        );
    }
  };

  return <TopNav>{renderNavButtons()}</TopNav>;
}

export default Header;
