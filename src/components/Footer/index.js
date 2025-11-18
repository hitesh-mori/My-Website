import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Bio, navLinks } from '../../data/constant';

const FooterContainer = styled.footer`
  padding: 60px 24px 30px;
  background: ${({ theme }) => theme.card};
  border-top: 1px solid ${({ theme }) => theme.border};
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TopSection = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 60px;
  padding-bottom: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.border};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
`;

const BrandSection = styled.div``;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  background: ${({ theme }) => theme.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.7;
  margin-bottom: 20px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: ${({ theme }) => theme.bgLight};
  color: ${({ theme }) => theme.text_secondary};
  font-size: 1rem;
  transition: all 0.3s ease;
  border: 1px solid ${({ theme }) => theme.border};

  &:hover {
    color: white;
    background: ${({ theme }) => theme.primary};
    transform: translateY(-3px);
  }
`;

const LinksSection = styled.div``;

const SectionTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px;
`;

const LinksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const FooterLink = styled(Link)`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text_secondary};
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateX(5px);
  }
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.text_muted};
`;

const BuiltWith = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.text_muted};
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <TopSection>
          <BrandSection>
            <Logo>Hitesh Mori</Logo>
            <Description>
              A passionate developer crafting modern web and mobile experiences.
              Always learning, always building.
            </Description>
            <SocialLinks>
              <SocialLink href={Bio.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                <FaGithub />
              </SocialLink>
              <SocialLink href={Bio.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                <FaLinkedin />
              </SocialLink>
              <SocialLink href={`mailto:${Bio.email}`} aria-label="Send email">
                <FaEnvelope />
              </SocialLink>
            </SocialLinks>
          </BrandSection>

          <LinksSection>
            <SectionTitle>Quick Links</SectionTitle>
            <LinksList>
              {navLinks.slice(0, 4).map((link) => (
                <FooterLink key={link.path} to={link.path}>
                  {link.name}
                </FooterLink>
              ))}
            </LinksList>
          </LinksSection>

          <LinksSection>
            <SectionTitle>Resources</SectionTitle>
            <LinksList>
              <FooterLink to="/blog">Blog</FooterLink>
              <FooterLink to="/achievements">Achievements</FooterLink>
              <FooterLink as="a" href={Bio.resume} target="_blank">Resume</FooterLink>
            </LinksList>
          </LinksSection>
        </TopSection>

        <BottomSection>
          <Copyright>
            © {currentYear} Hitesh Mori. All rights reserved.
          </Copyright>
        </BottomSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
