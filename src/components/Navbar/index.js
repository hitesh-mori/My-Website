import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaGithub, FaSun, FaMoon } from 'react-icons/fa';
import { Bio, navLinks } from '../../data/constant';
import HeroImg from '../../images/photo.jpg';

const NavWrapper = styled.div`
  position: fixed;
  top: 20px;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  padding: 0 20px;

  @media (max-width: 768px) {
    top: 10px;
    padding: 0 10px;
  }
`;

const Nav = styled(motion.nav)`
  width: 100%;
  max-width: 1100px;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background: ${({ theme }) => theme.bgGlass};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.shadow};
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.borderHover};
    box-shadow: ${({ theme }) => theme.shadowGlow};
  }

  @media (max-width: 768px) {
    padding: 10px 16px;
    border-radius: 24px;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.primary};
  transition: all 0.3s ease;

  ${Logo}:hover & {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 15px ${({ theme }) => theme.primary}50;
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled(Link)`
  position: relative;
  padding: 8px 16px;
  color: ${({ theme, $isActive }) => $isActive ? theme.primary : theme.text_secondary};
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 20px;
  transition: all 0.3s ease;
  background: ${({ theme, $isActive }) => $isActive ? `${theme.primary}15` : 'transparent'};

  &:hover {
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => `${theme.primary}10`};
    transform: translateY(-2px);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);
    width: ${({ $isActive }) => $isActive ? '20px' : '0'};
    height: 2px;
    background: ${({ theme }) => theme.primaryGradient};
    border-radius: 2px;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 20px;
  }
`;

const GitHubButton = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: ${({ theme }) => theme.primaryGradient};
  color: white;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 20px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);

  &:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 1.3rem;
  cursor: pointer;
  padding: 8px;
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => `${theme.primary}15`};
    color: ${({ theme }) => theme.primary};
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.bg};
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const MobileNavItem = styled(Link)`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme, $isActive }) => $isActive ? theme.primary : theme.text_primary};
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => `${theme.primary}10`};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: ${({ $isActive }) => $isActive ? '40px' : '0'};
    height: 3px;
    background: ${({ theme }) => theme.primaryGradient};
    border-radius: 2px;
    transition: width 0.3s ease;
  }
`;

const MobileGitHubButton = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: ${({ theme }) => theme.primaryGradient};
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 24px;
  margin-top: 20px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 12px;
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => `${theme.primary}15`};
    color: ${({ theme }) => theme.primary};
    transform: rotate(90deg);
  }
`;

const ThemeToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.bgLight};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-right: 12px;

  &:hover {
    background: ${({ theme }) => `${theme.primary}15`};
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    transform: rotate(15deg);
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    font-size: 1rem;
    margin-right: 8px;
  }
`;

const MobileThemeToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 24px;
  background: ${({ theme }) => theme.bgLight};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 24px;
  color: ${({ theme }) => theme.text_primary};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;

  &:hover {
    background: ${({ theme }) => `${theme.primary}15`};
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileThemeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: ${({ theme }) => theme.bgLight};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => `${theme.primary}15`};
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  }
`;

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      }
    })
  };

  return (
    <>
      <NavWrapper>
        <Nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <NavContainer style={{
            background: scrolled
              ? (isDarkMode ? 'rgba(18, 18, 26, 0.95)' : 'rgba(255, 255, 255, 0.95)')
              : undefined,
          }}>
            <Logo to="/">
              <LogoImage src={HeroImg} alt="Hitesh Mori" />
            </Logo>

            <NavItems>
              {navLinks.map((link) => (
                <NavItem
                  key={link.path}
                  to={link.path}
                  $isActive={location.pathname === link.path}
                >
                  {link.name}
                </NavItem>
              ))}
            </NavItems>

            <NavActions>
              <ThemeToggle onClick={toggleTheme} aria-label="Toggle theme">
                {isDarkMode ? <FaSun /> : <FaMoon />}
              </ThemeToggle>

              <GitHubButton href={Bio.github} target="_blank" rel="noopener noreferrer" aria-label="View GitHub profile">
                <FaGithub />
                GitHub
              </GitHubButton>
            </NavActions>

            <MobileActions>
              <MobileThemeButton onClick={toggleTheme} aria-label="Toggle theme">
                {isDarkMode ? <FaSun /> : <FaMoon />}
              </MobileThemeButton>
              <MobileMenuButton onClick={() => setIsOpen(true)}>
                <FaBars />
              </MobileMenuButton>
            </MobileActions>
          </NavContainer>
        </Nav>
      </NavWrapper>

      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <CloseButton onClick={() => setIsOpen(false)}>
              <FaTimes />
            </CloseButton>

            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                custom={i}
                variants={itemVariants}
                initial="closed"
                animate="open"
              >
                <MobileNavItem
                  to={link.path}
                  $isActive={location.pathname === link.path}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </MobileNavItem>
              </motion.div>
            ))}

            <motion.div
              custom={navLinks.length}
              variants={itemVariants}
              initial="closed"
              animate="open"
            >
              <MobileGitHubButton
                href={Bio.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                <FaGithub />
                View GitHub
              </MobileGitHubButton>
            </motion.div>

            <motion.div
              custom={navLinks.length + 1}
              variants={itemVariants}
              initial="closed"
              animate="open"
            >
              <MobileThemeToggle onClick={toggleTheme}>
                {isDarkMode ? <FaSun /> : <FaMoon />}
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </MobileThemeToggle>
            </motion.div>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
