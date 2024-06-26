import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  SidebarMenu,
} from "./SidebarElements";

function Sidebar({ isOpen, toggle }) {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>
              About
            </SidebarLink>
            <SidebarLink to="discover" onClick={toggle}>
              Discover
            </SidebarLink>
            <SidebarLink to="services" onClick={toggle}>
              Services
            </SidebarLink>
            <SidebarLink to="Signup" onClick={toggle}>
              SignUp
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/signin" onClick={toggle}>
              Sign In
            </SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
}

export default Sidebar;
