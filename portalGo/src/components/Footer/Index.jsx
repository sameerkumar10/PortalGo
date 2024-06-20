import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLinksContainer,
  FooterWrap,
  FooterLinksWrapper,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,SocialMediaWrap,
  WebsiteRights
} from "./FooterElements";
import { FaInstagram,FaFacebook, FaLinkedin } from "react-icons/fa";



const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> About Us </FooterLinkTitle>
              <FooterLink to="/"> How it works </FooterLink>
              <FooterLink to="/"> Testimonials</FooterLink>
              <FooterLink to="/"> Careers </FooterLink>
              <FooterLink to="/"> Investors </FooterLink>
              <FooterLink to="/"> Terms of Services</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Contact Us </FooterLinkTitle>
              <FooterLink to="/"> Contact </FooterLink>
              <FooterLink to="/"> Support</FooterLink>
              <FooterLink to="/"> Destionation </FooterLink>
              <FooterLink to="/"> Investors </FooterLink>
              <FooterLink to="/"> Sponsorship</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Social Media</FooterLinkTitle>
              <FooterLink to="/"> Instagram </FooterLink>
              <FooterLink to="/"> Facebook</FooterLink>
              <FooterLink to="/"> YouTube </FooterLink>
              <FooterLink to="/"> Twitter </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>PortalGo</SocialLogo>
            <WebsiteRights>
              PortalGo @ {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" arial-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" arial-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" arial-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
