import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { achievements } from '../data/constant';
import Footer from '../components/Footer';
import { FaTrophy, FaMedal, FaStar } from 'react-icons/fa';

const Container = styled.div`
  padding-top: 120px;
  min-height: 100vh;
`;

const Section = styled.section`
  padding: 40px 24px 100px;
  max-width: 1100px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 16px;

  span {
    background: ${({ theme }) => theme.primaryGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 600px;
  margin: 0 auto;
`;

const SectionHeader = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 32px;
  margin-top: 60px;

  &:first-of-type {
    margin-top: 0;
  }
`;

const SectionIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: ${({ theme }) => theme.primaryGradient};
  color: white;
  font-size: 1.1rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const AchievementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
`;

const AchievementCard = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  border-radius: 16px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.border};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ $type, theme }) => {
      if ($type === 'trophy') return 'linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%)';
      if ($type === 'medal') return 'linear-gradient(90deg, #94a3b8 0%, #64748b 100%)';
      return theme.primaryGradient;
    }};
  }

  &:hover {
    border-color: ${({ theme }) => theme.primary}40;
    transform: translateY(-4px);
    box-shadow: 0 12px 40px ${({ theme }) => theme.primary}15;
  }
`;

const AchievementHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 16px;
`;

const AchievementIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: ${({ $type }) => {
    if ($type === 'trophy') return 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)';
    if ($type === 'medal') return 'linear-gradient(135deg, #94a3b8 0%, #64748b 100%)';
    return 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)';
  }};
  color: white;
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const AchievementInfo = styled.div`
  flex: 1;
`;

const AchievementTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 4px;
  line-height: 1.3;
`;

const AchievementOrg = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
`;

const AchievementDesc = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
  margin-bottom: 12px;
`;

const AchievementFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

const AchievementDate = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  padding: 6px 12px;
  background: ${({ theme }) => theme.bgLight};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.border};
`;

const ProjectTag = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  padding: 6px 12px;
  background: ${({ theme }) => theme.bgLight};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.border};
`;

const getIcon = (type) => {
  switch (type) {
    case 'trophy':
      return <FaTrophy />;
    case 'medal':
      return <FaMedal />;
    default:
      return <FaStar />;
  }
};

const Achievements = () => {
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
        duration: 0.4,
      }
    }
  };

  return (
    <Container>
      <Section>
        <Header>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            My <span>Achievements</span>
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Hackathon wins and competitive programming milestones
          </Subtitle>
        </Header>

        {/* Achievements */}
        <SectionHeader
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <SectionIcon>
            <FaTrophy />
          </SectionIcon>
          <SectionTitle>Achievements</SectionTitle>
        </SectionHeader>

        <AchievementsGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {achievements.map((achievement) => (
            <AchievementCard
              key={achievement.id}
              variants={itemVariants}
              $type={achievement.icon}
            >
              <AchievementHeader>
                <AchievementIcon $type={achievement.icon}>
                  {getIcon(achievement.icon)}
                </AchievementIcon>
                <AchievementInfo>
                  <AchievementTitle>{achievement.title}</AchievementTitle>
                  <AchievementOrg>{achievement.organization}</AchievementOrg>
                </AchievementInfo>
              </AchievementHeader>
              <AchievementDesc>{achievement.description}</AchievementDesc>
              <AchievementFooter>
                <AchievementDate>{achievement.date}</AchievementDate>
                {achievement.project && (
                  <ProjectTag>{achievement.project}</ProjectTag>
                )}
              </AchievementFooter>
            </AchievementCard>
          ))}
        </AchievementsGrid>
      </Section>

      <Footer />
    </Container>
  );
};

export default Achievements;
