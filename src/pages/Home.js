import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaDownload, FaPlay } from 'react-icons/fa';
import { Bio, skills, projects, achievements, blogPosts, codingProfiles } from '../data/constant';
import { Link } from 'react-router-dom';
import { FaTrophy, FaCode, FaPen, FaCalendar, FaClock } from 'react-icons/fa';
import HeroIMG from '../images/photo.jpg';
import Footer from '../components/Footer';

// Keyframe animations
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.05); opacity: 0.8; }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const Container = styled.div`
  padding-top: 100px;
`;

// Hero Section
const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  position: relative;
  overflow: hidden;
`;

// Floating particles/shapes
const FloatingShape = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: ${({ theme, $color }) => $color || theme.primary};
  opacity: 0.1;
  filter: blur(40px);
  pointer-events: none;
`;

const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blink = keyframes`
  0%, 50% { border-color: transparent; }
  51%, 100% { border-color: currentColor; }
`;

const FloatingCode = styled(motion.div)`
  position: absolute;
  font-size: ${({ $size }) => $size || '0.85rem'};
  font-family: 'Fira Code', 'Consolas', monospace;
  color: ${({ theme }) => theme.primary};
  opacity: 0.25;
  white-space: pre;
  line-height: 1.5;
  background: ${({ theme }) => `${theme.card}90`};
  padding: 16px 20px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.border};
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    display: none;
  }
`;

const TypedLine = styled.span`
  display: block;
  overflow: hidden;
  white-space: nowrap;
  animation: ${typing} ${({ $duration }) => $duration || '2s'} steps(40, end) forwards;
  animation-delay: ${({ $delay }) => $delay || '0s'};
  width: 0;
`;

const CodeKeyword = styled.span`
  color: #c792ea;
`;

const CodeString = styled.span`
  color: #c3e88d;
`;

const CodeFunction = styled.span`
  color: #82aaff;
`;

const CodeComment = styled.span`
  color: #546e7a;
  font-style: italic;
`;

const OrbitRing = styled.div`
  position: absolute;
  border: 1px dashed ${({ theme }) => `${theme.primary}30`};
  border-radius: 50%;
  animation: ${rotate} ${({ $duration }) => $duration || '20s'} linear infinite;

  @media (max-width: 768px) {
    display: none;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 40px;
  }
`;

const HeroLeft = styled(motion.div)`
  @media (max-width: 960px) {
    order: 2;
  }
`;

const HeroRight = styled(motion.div)`
  display: flex;
  justify-content: center;

  @media (max-width: 960px) {
    order: 1;
  }
`;

const Greeting = styled(motion.div)`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  margin-bottom: 12px;
`;

const Name = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 16px;
  line-height: 1.2;
  position: relative;

  span.highlight {
    background: ${({ theme }) => theme.primaryGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    background-size: 200% auto;
    animation: ${shimmer} 3s linear infinite;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const StatusBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: ${({ theme }) => `${theme.success}15`};
  border: 1px solid ${({ theme }) => `${theme.success}40`};
  border-radius: 50px;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.success};
  margin-bottom: 16px;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background: ${({ theme }) => theme.success};
    border-radius: 50%;
    animation: ${pulse} 2s ease-in-out infinite;
  }

  @media (max-width: 960px) {
    margin: 0 auto 16px;
  }
`;

const StatsRow = styled(motion.div)`
  display: flex;
  gap: 24px;
  margin-top: 32px;

  @media (max-width: 960px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 16px;
  }
`;

const StatItem = styled.div`
  text-align: center;

  .number {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primaryGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .label {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.text_muted};
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const RoleContainer = styled(motion.div)`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 24px;
  display: flex;
  gap: 8px;

  @media (max-width: 960px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    flex-direction: column;
    gap: 0;
  }
`;

const RoleSpan = styled.span`
  background: ${({ theme }) => theme.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.8;
  margin-bottom: 32px;
  max-width: 500px;

  @media (max-width: 960px) {
    margin: 0 auto 32px;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 16px;
  margin-bottom: 32px;

  @media (max-width: 960px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: ${({ theme }) => theme.primaryGradient};
  color: white;
  text-decoration: none;
  font-weight: 600;
  border-radius: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(99, 102, 241, 0.5);
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: transparent;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 600;
  border-radius: 12px;
  border: 2px solid ${({ theme }) => theme.primary};
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => `${theme.primary}15`};
    transform: translateY(-3px);
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 16px;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_secondary};
  font-size: 1.2rem;
  transition: all 0.3s ease;
  border: 1px solid ${({ theme }) => theme.border};

  &:hover {
    color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.2);
  }
`;

const HeroImageWrapper = styled(motion.div)`
  position: relative;
  width: 450px;
  height: 450px;

  @media (max-width: 768px) {
    width: 320px;
    height: 320px;
  }
`;

const HeroImageBg = styled.div`
  position: absolute;
  inset: 0;
  background: ${({ theme }) => theme.primaryGradient};
  border-radius: 50%;
  animation: ${pulse} 4s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    inset: -8px;
    background: ${({ theme }) => theme.primaryGradient};
    border-radius: 50%;
    z-index: -1;
    opacity: 0.3;
    filter: blur(20px);
  }

  &::after {
    content: '';
    position: absolute;
    inset: -20px;
    background: ${({ theme }) => theme.primaryGradient};
    border-radius: 50%;
    z-index: -2;
    opacity: 0.1;
    filter: blur(40px);
  }
`;

const HeroImage = styled.img`
  position: absolute;
  inset: 4px;
  width: calc(100% - 8px);
  height: calc(100% - 8px);
  object-fit: cover;
  border-radius: 50%;
`;

// Decorative elements around image
const TechBadge = styled(motion.div)`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  img {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const ExperienceBadge = styled(motion.div)`
  position: absolute;
  padding: 12px 16px;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  .number {
    font-size: 1.2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.primary};
  }

  .text {
    font-size: 0.65rem;
    color: ${({ theme }) => theme.text_muted};
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

// Skills Section
const Section = styled.section`
  padding: 100px 24px;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.text_primary};

  span {
    background: ${({ theme }) => theme.primaryGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  max-width: 600px;
  margin: 0 auto 60px;
`;

const SkillsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const SkillCategory = styled(motion.div)``;

const SkillCategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

const SkillCategoryTitle = styled.h3`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text_muted};
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin: 0;
`;

const SkillCategoryLine = styled.div`
  flex: 1;
  height: 1px;
  background: ${({ theme }) => theme.border};
`;

const SkillsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const SkillPill = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: ${({ theme }) => theme.card};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.border};
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  cursor: default;
  will-change: transform;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.12);
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const SkillIcon = styled.img`
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
  filter: ${({ theme, $invertInLight, $invertInDark }) => {
    const isLightTheme = theme.bg === '#fafafa';
    // White icons need inversion in light theme
    if ($invertInLight && isLightTheme) return 'invert(1)';
    // Dark icons need inversion in dark theme
    if ($invertInDark && !isLightTheme) return 'invert(1)';
    return 'none';
  }};
`;

const SkillName = styled.span`
  font-size: 0.85rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  white-space: nowrap;
`;

// Coding Profiles Section
const ProfilesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  max-width: 1000px;
  margin: 0 auto;
`;

const ProfileCard = styled(motion.a)`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.card};
  border-radius: 16px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.border};
  text-decoration: none;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  will-change: transform;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ $color }) => $color || '#6366f1'};
  }

  &:hover {
    border-color: ${({ $color }) => $color || '#6366f1'}60;
    transform: translateY(-4px);
    box-shadow: 0 12px 40px ${({ $color }) => $color || '#6366f1'}20;
  }

  &:focus-visible {
    outline: 2px solid ${({ $color }) => $color || '#6366f1'};
    outline-offset: 2px;
  }
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

const ProfileLogo = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: ${({ theme }) => theme.bgLight};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    filter: ${({ theme, $invertInLight }) => $invertInLight && theme.bg === '#fafafa' ? 'invert(1)' : 'none'};
  }
`;

const ProfileInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const ProfileName = styled.h3`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 2px;
`;

const ProfileUsername = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.text_muted};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ProfileStats = styled.div`
  display: grid;
  grid-template-columns: ${({ $single }) => $single ? '1fr' : '1fr 1fr'};
  gap: 8px;
`;

const ProfileStat = styled.div`
  text-align: center;
  padding: 10px 8px;
  background: ${({ theme }) => theme.bgLight};
  border-radius: 8px;
`;

const ProfileStatValue = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ $color }) => $color || '#6366f1'};
  margin-bottom: 2px;
`;

const ProfileStatLabel = styled.div`
  font-size: 0.65rem;
  color: ${({ theme }) => theme.text_muted};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

// Latest News Section - Clean Grid
const NewsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const NewsCard = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.border};
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    border-color: ${({ theme }) => theme.borderHover};
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadowGlow};
  }
`;

const NewsCardImage = styled.div`
  width: 100%;
  height: 140px;
  background: ${({ theme, $gradient }) => $gradient || theme.primaryGradient};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const NewsCardIcon = styled.div`
  font-size: 2.5rem;
  color: white;
  opacity: 0.9;
`;

const NewsCardBadge = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 0.6rem;
  font-weight: 700;
  color: white;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  padding: 4px 10px;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const NewsCardContent = styled.div`
  padding: 16px;
`;

const NewsCardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 0 0 8px 0;
  line-height: 1.4;
`;

const NewsCardDesc = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.5;
  margin: 0 0 12px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const NewsCardMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.7rem;
  color: ${({ theme }) => theme.text_muted};
`;

const NewsCardMetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    font-size: 0.65rem;
  }
`;

const NewsCardTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 10px;
`;

const NewsCardTag = styled.span`
  font-size: 0.65rem;
  color: ${({ theme }) => theme.text_muted};
  background: ${({ theme }) => theme.bgLight};
  padding: 2px 6px;
  border-radius: 4px;
`;

const ViewAllButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 40px auto 0;
  padding: 14px 28px;
  background: transparent;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 600;
  border-radius: 12px;
  border: 2px solid ${({ theme }) => theme.primary};
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => `${theme.primary}15`};
    transform: translateY(-3px);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Home = ({ openModal, setOpenModal }) => {
  // Get latest achievement
  const latestAchievement = achievements[0];

  // Get OneFlow project for Latest News section
  const oneFlowProject = projects.find(p => p.title === "OneFlow");
  const latestProjects = oneFlowProject ? [oneFlowProject] : [...projects]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 1);

  // Get latest 2 blog posts
  const latestBlogs = [...blogPosts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 2);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      }
    }
  };

  return (
    <Container>
      {/* Hero Section */}
      <HeroSection>
        {/* Floating background shapes */}
        <FloatingShape
          $color="#6366f1"
          style={{ width: '300px', height: '300px', top: '10%', left: '5%' }}
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <FloatingShape
          $color="#a855f7"
          style={{ width: '200px', height: '200px', bottom: '20%', right: '10%' }}
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <FloatingShape
          $color="#22d3ee"
          style={{ width: '150px', height: '150px', top: '60%', left: '15%' }}
          animate={{ x: [0, 15, 0], y: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating code snippets with typing effect */}
        <FloatingCode
          style={{ top: '15%', left: '-5%' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.2, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <TypedLine $delay="1.5s" $duration="1.5s">
            <CodeKeyword>class</CodeKeyword> MyApp <CodeKeyword>extends</CodeKeyword> StatelessWidget {'{'}
          </TypedLine>
          <TypedLine $delay="2s" $duration="1.2s">
            {'  '}@override
          </TypedLine>
          <TypedLine $delay="2.5s" $duration="1.5s">
            {'  '}Widget <CodeFunction>build</CodeFunction>(context) {'{'}
          </TypedLine>
          <TypedLine $delay="3s" $duration="1.8s">
            {'    '}<CodeKeyword>return</CodeKeyword> MaterialApp(
          </TypedLine>
          <TypedLine $delay="3.5s" $duration="1.5s">
            {'      '}home: <CodeFunction>Home</CodeFunction>(),
          </TypedLine>
          <TypedLine $delay="4s" $duration="0.5s">
            {'    '});
          </TypedLine>
          <TypedLine $delay="4.3s" $duration="0.3s">
            {'  }{'}'}
          </TypedLine>
          <TypedLine $delay="4.5s" $duration="0.3s">
            {'}'}
          </TypedLine>
        </FloatingCode>

        <FloatingCode
          style={{ bottom: '10%', right: '-3%' }}
          $size="0.8rem"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.2, y: 0 }}
          transition={{ delay: 1.8, duration: 0.5 }}
        >
          <TypedLine $delay="2s" $duration="1.2s">
            <CodeComment>// Fetch data</CodeComment>
          </TypedLine>
          <TypedLine $delay="2.5s" $duration="2s">
            <CodeKeyword>Future</CodeKeyword> <CodeFunction>getData</CodeFunction>() <CodeKeyword>async</CodeKeyword> {'{'}
          </TypedLine>
          <TypedLine $delay="3s" $duration="2s">
            {'  '}<CodeKeyword>final</CodeKeyword> res = <CodeKeyword>await</CodeKeyword> api.get(
          </TypedLine>
          <TypedLine $delay="3.5s" $duration="1.5s">
            {'    '}<CodeString>'/api/data'</CodeString>
          </TypedLine>
          <TypedLine $delay="4s" $duration="1s">
            {'  '});
          </TypedLine>
          <TypedLine $delay="4.3s" $duration="1.5s">
            {'  '}<CodeKeyword>return</CodeKeyword> res.body;
          </TypedLine>
          <TypedLine $delay="4.8s" $duration="0.3s">
            {'}'}
          </TypedLine>
        </FloatingCode>

        <HeroContent>
          <HeroLeft
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Greeting
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I'm
            </Greeting>
            <Name
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="highlight">{Bio.name}</span>
            </Name>
            <RoleContainer
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              I'm a{' '}
              <RoleSpan>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </RoleSpan>
            </RoleContainer>
            <Description
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {Bio.description}
            </Description>
            <ButtonGroup
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <PrimaryButton href={Bio.resume} target="_blank">
                <FaDownload />
                Resume
              </PrimaryButton>
              <SecondaryButton as={Link} to="/projects">
                View Projects
                <FaArrowRight />
              </SecondaryButton>
            </ButtonGroup>
            <SocialLinks
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <SocialIcon href={Bio.github} target="_blank">
                <FaGithub />
              </SocialIcon>
              <SocialIcon href={Bio.linkedin} target="_blank">
                <FaLinkedin />
              </SocialIcon>
              <SocialIcon href={`mailto:${Bio.email}`}>
                <FaEnvelope />
              </SocialIcon>
            </SocialLinks>

            <StatsRow
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <StatItem>
                <div className="number">15+</div>
                <div className="label">Projects</div>
              </StatItem>
              <StatItem>
                <div className="number">10+</div>
                <div className="label">Hackathons</div>
              </StatItem>
            </StatsRow>
          </HeroLeft>

          <HeroRight
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <HeroImageWrapper
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <HeroImageBg />
              <HeroImage src={HeroIMG} alt={Bio.name} />
            </HeroImageWrapper>
          </HeroRight>
        </HeroContent>
      </HeroSection>

      {/* Skills Section */}
      <Section id="skills">
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My <span>Skills</span>
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Technologies and tools I work with to bring ideas to life
        </SectionSubtitle>
        <SkillsContainer
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((category, index) => (
            <SkillCategory key={index} variants={itemVariants}>
              <SkillCategoryHeader>
                <SkillCategoryTitle>{category.title}</SkillCategoryTitle>
                <SkillCategoryLine />
              </SkillCategoryHeader>
              <SkillsRow>
                {category.skills.map((skill, idx) => (
                  <SkillPill key={idx}>
                    <SkillIcon
                      src={skill.image}
                      alt={skill.name}
                      $invertInLight={skill.name === 'GitHub'}
                      $invertInDark={skill.name === 'Express.js' || skill.name === 'Django'}
                    />
                    <SkillName>{skill.name}</SkillName>
                  </SkillPill>
                ))}
              </SkillsRow>
            </SkillCategory>
          ))}
        </SkillsContainer>
      </Section>

      {/* Coding Profiles Section */}
      <Section id="profiles">
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Coding <span>Profiles</span>
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          My competitive programming and open source presence
        </SectionSubtitle>
        <ProfilesGrid
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {codingProfiles.map((profile, index) => (
            <ProfileCard
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              $color={profile.color}
            >
              <ProfileHeader>
                <ProfileLogo $invertInLight={profile.platform === 'GitHub'}>
                  <img src={profile.logo} alt={profile.platform} />
                </ProfileLogo>
                <ProfileInfo>
                  <ProfileName>{profile.platform}</ProfileName>
                  <ProfileUsername>@{profile.username}</ProfileUsername>
                </ProfileInfo>
              </ProfileHeader>
              <ProfileStats $single={true}>
                <ProfileStat>
                  <ProfileStatValue $color={profile.color}>
                    {profile.stats.solved || profile.stats.contributions || profile.stats.repos}
                  </ProfileStatValue>
                  <ProfileStatLabel>
                    {profile.stats.solved ? 'Solved' : profile.stats.contributions ? 'Contributions' : 'Repos'}
                  </ProfileStatLabel>
                </ProfileStat>
              </ProfileStats>
            </ProfileCard>
          ))}
        </ProfilesGrid>
      </Section>

      {/* Latest News Section */}
      <Section id="latest">
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Latest <span>News</span>
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Recent achievements, projects, and blog posts
        </SectionSubtitle>
        <NewsGrid
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Achievement Card */}
          {latestAchievement && (
            <NewsCard
              as={Link}
              to="/achievements"
              variants={itemVariants}
            >
              <NewsCardImage $gradient="linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)">
                <NewsCardBadge>Achievement</NewsCardBadge>
                <NewsCardIcon>
                  <FaTrophy />
                </NewsCardIcon>
              </NewsCardImage>
              <NewsCardContent>
                <NewsCardTitle>{latestAchievement.title}</NewsCardTitle>
                <NewsCardDesc>{latestAchievement.description}</NewsCardDesc>
                <NewsCardMeta>
                  <NewsCardMetaItem>
                    {latestAchievement.organization} • {latestAchievement.date}
                  </NewsCardMetaItem>
                </NewsCardMeta>
              </NewsCardContent>
            </NewsCard>
          )}

          {/* Latest Project Card */}
          {latestProjects[0] && (
            <NewsCard
              variants={itemVariants}
              onClick={() => setOpenModal({ state: true, project: latestProjects[0] })}
            >
              <NewsCardImage>
                <NewsCardBadge>Project</NewsCardBadge>
                {latestProjects[0].image ? (
                  <img src={latestProjects[0].image} alt={latestProjects[0].title} />
                ) : (
                  <NewsCardIcon>
                    <FaCode />
                  </NewsCardIcon>
                )}
              </NewsCardImage>
              <NewsCardContent>
                <NewsCardTitle>{latestProjects[0].title}</NewsCardTitle>
                <NewsCardDesc>{latestProjects[0].shortDescription || latestProjects[0].description}</NewsCardDesc>
                <NewsCardMeta>
                  <NewsCardMetaItem>
                    <FaCalendar />
                    {latestProjects[0].date}
                  </NewsCardMetaItem>
                </NewsCardMeta>
                <NewsCardTags>
                  {latestProjects[0].tags?.slice(0, 3).map((tag, idx) => (
                    <NewsCardTag key={idx}>{tag}</NewsCardTag>
                  ))}
                </NewsCardTags>
              </NewsCardContent>
            </NewsCard>
          )}

          {/* Blog Card */}
          {latestBlogs[0] && (
            <NewsCard
              as={Link}
              to="/blog"
              variants={itemVariants}
            >
              <NewsCardImage $gradient="linear-gradient(135deg, #10b981 0%, #06b6d4 100%)">
                <NewsCardBadge>Blog</NewsCardBadge>
                <NewsCardIcon>
                  <FaPen />
                </NewsCardIcon>
              </NewsCardImage>
              <NewsCardContent>
                <NewsCardTitle>{latestBlogs[0].title}</NewsCardTitle>
                <NewsCardDesc>{latestBlogs[0].excerpt}</NewsCardDesc>
                <NewsCardMeta>
                  <NewsCardMetaItem>
                    <FaClock />
                    {latestBlogs[0].readTime}
                  </NewsCardMetaItem>
                </NewsCardMeta>
              </NewsCardContent>
            </NewsCard>
          )}
        </NewsGrid>
      </Section>

      <Footer />
    </Container>
  );
};

export default Home;
