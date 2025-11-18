import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { experience, education } from '../data/constant';
import Footer from '../components/Footer';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Container = styled.div`
  padding-top: 120px;
  min-height: 100vh;
`;

const Section = styled.section`
  padding: 40px 24px 100px;
  max-width: 1200px;
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

const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

const Column = styled.div``;

const SectionHeader = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 32px;
`;

const SectionIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: ${({ theme }) => theme.primaryGradient};
  color: white;
  font-size: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 28px;

  &::before {
    content: '';
    position: absolute;
    left: 4px;
    top: 24px;
    bottom: 24px;
    width: 2px;
    background: ${({ theme }) => theme.border};
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  padding-bottom: 24px;

  &:last-child {
    padding-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    left: -24px;
    top: 24px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({ $isPresent, theme }) => $isPresent ? theme.primary : theme.text_muted};
    border: 2px solid ${({ theme }) => theme.bg};
    box-shadow: ${({ $isPresent, theme }) => $isPresent ? `0 0 0 3px ${theme.primary}30` : 'none'};
  }

  @keyframes pulse {
    0%, 100% {
      box-shadow: 0 0 0 3px ${({ theme }) => theme.primary}30;
    }
    50% {
      box-shadow: 0 0 0 6px ${({ theme }) => theme.primary}20;
    }
  }
`;

const CompanyCard = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 12px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.border};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.primary}40;
  }
`;

const PresentBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  background: ${({ theme }) => theme.primary}20;
  color: ${({ theme }) => theme.primary};
  border-radius: 4px;
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-left: 8px;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.primary};
    animation: blink 1.5s ease-in-out infinite;
  }

  @keyframes blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
  }
`;

const CompanyHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  ${({ $hasMultiple }) => $hasMultiple && `
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  `}
`;

const CompanyLogo = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: ${({ theme }) => theme.bgLight};
  border: 1px solid ${({ theme }) => theme.border};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 6px;
  }

  span {
    font-size: 0.9rem;
    font-weight: 600;
    background: ${({ theme }) => theme.primaryGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const CompanyInfo = styled.div`
  flex: 1;
`;

const CompanyName = styled.h3`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 2px;
`;

const CompanyDuration = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.text_muted};
`;

const RolesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const RoleItem = styled.div`
  position: relative;
  padding-left: 16px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.text_muted};
  }
`;

const SingleRole = styled.div`
  padding-top: 4px;
`;

const RoleTitle = styled.h4`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 2px;
`;

const RoleDate = styled.p`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.text_muted};
  margin-bottom: 6px;
`;

const RoleDescription = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.5;
  margin-top: 6px;
  margin-bottom: 8px;
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const Skill = styled.span`
  padding: 3px 8px;
  background: ${({ theme }) => theme.primary}15;
  color: ${({ theme }) => theme.primary};
  border-radius: 4px;
  font-size: 0.65rem;
  font-weight: 500;
`;

const Grade = styled.span`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
`;

const Experience = () => {
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      }
    }
  };

  // Helper to check if date contains "Present"
  const isPresent = (date) => date.toLowerCase().includes('present');

  // Group experience by company
  const groupedExperience = experience.reduce((acc, exp) => {
    const existingCompany = acc.find(item => item.company === exp.company);
    if (existingCompany) {
      existingCompany.roles.push({
        role: exp.role,
        date: exp.date,
        description: exp.description,
        skills: exp.skills,
      });
      // Update isPresent if any role is present
      if (isPresent(exp.date)) {
        existingCompany.isPresent = true;
      }
    } else {
      acc.push({
        company: exp.company,
        logo: exp.logo,
        isPresent: isPresent(exp.date),
        roles: [{
          role: exp.role,
          date: exp.date,
          description: exp.description,
          skills: exp.skills,
        }]
      });
    }
    return acc;
  }, []);

  // Sort: current/present items first
  groupedExperience.sort((a, b) => {
    if (a.isPresent && !b.isPresent) return -1;
    if (!a.isPresent && b.isPresent) return 1;
    return 0;
  });

  // Sort education: current/present items first
  const sortedEducation = [...education].sort((a, b) => {
    const aPresent = isPresent(a.date);
    const bPresent = isPresent(b.date);
    if (aPresent && !bPresent) return -1;
    if (!aPresent && bPresent) return 1;
    return 0;
  });

  // Calculate total duration for companies with multiple roles
  const getCompanyDuration = (roles) => {
    if (roles.length === 1) return null;
    const dates = roles.map(r => r.date);
    // Simple: just show the range from first to last
    const firstDate = dates[dates.length - 1].split(' - ')[0];
    const lastDate = dates[0].split(' - ')[1] || dates[0].split(' - ')[0];
    return `${firstDate} - ${lastDate}`;
  };

  return (
    <Container>
      <Section>
        <Header>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Experience & <span>Education</span>
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            My professional journey and academic background
          </Subtitle>
        </Header>

        <TwoColumnGrid>
          {/* Work Experience Column */}
          <Column>
            <SectionHeader
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <SectionIcon>
                <FaBriefcase />
              </SectionIcon>
              <SectionTitle>Work Experience</SectionTitle>
            </SectionHeader>

            <Timeline>
              {groupedExperience.map((company, index) => (
                <TimelineItem
                  key={company.company}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  $isPresent={company.isPresent}
                >
                  <CompanyCard>
                    <CompanyHeader $hasMultiple={company.roles.length > 1}>
                      <CompanyLogo>
                        {company.logo ? (
                          <img src={company.logo} alt={company.company} />
                        ) : (
                          <span>{company.company.charAt(0)}</span>
                        )}
                      </CompanyLogo>
                      <CompanyInfo>
                        <CompanyName>
                          {company.company}
                          {company.isPresent && <PresentBadge>Current</PresentBadge>}
                        </CompanyName>
                        {company.roles.length > 1 && (
                          <CompanyDuration>
                            {getCompanyDuration(company.roles)} · {company.roles.length} roles
                          </CompanyDuration>
                        )}
                        {company.roles.length === 1 && (
                          <CompanyDuration>{company.roles[0].date}</CompanyDuration>
                        )}
                      </CompanyInfo>
                    </CompanyHeader>

                    {company.roles.length > 1 ? (
                      <RolesList>
                        {company.roles.map((role, roleIndex) => (
                          <RoleItem key={roleIndex}>
                            <RoleTitle>{role.role}</RoleTitle>
                            <RoleDate>{role.date}</RoleDate>
                            {role.description && (
                              <RoleDescription>{role.description}</RoleDescription>
                            )}
                            {role.skills && role.skills.length > 0 && (
                              <Skills>
                                {role.skills.map((skill, idx) => (
                                  <Skill key={idx}>{skill}</Skill>
                                ))}
                              </Skills>
                            )}
                          </RoleItem>
                        ))}
                      </RolesList>
                    ) : (
                      <SingleRole>
                        <RoleTitle>{company.roles[0].role}</RoleTitle>
                        {company.roles[0].description && (
                          <RoleDescription>{company.roles[0].description}</RoleDescription>
                        )}
                        {company.roles[0].skills && company.roles[0].skills.length > 0 && (
                          <Skills>
                            {company.roles[0].skills.map((skill, idx) => (
                              <Skill key={idx}>{skill}</Skill>
                            ))}
                          </Skills>
                        )}
                      </SingleRole>
                    )}
                  </CompanyCard>
                </TimelineItem>
              ))}
            </Timeline>
          </Column>

          {/* Education Column */}
          <Column>
            <SectionHeader
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <SectionIcon>
                <FaGraduationCap />
              </SectionIcon>
              <SectionTitle>Education</SectionTitle>
            </SectionHeader>

            <Timeline>
              {sortedEducation.map((edu, index) => {
                const eduIsPresent = isPresent(edu.date);
                return (
                  <TimelineItem
                    key={edu.id}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    $isPresent={eduIsPresent}
                  >
                    <CompanyCard>
                      <CompanyHeader $hasMultiple={false}>
                        <CompanyLogo>
                          {edu.logo ? (
                            <img src={edu.logo} alt={edu.school} />
                          ) : (
                            <span>{edu.school.charAt(0)}</span>
                          )}
                        </CompanyLogo>
                        <CompanyInfo>
                          <CompanyName>
                            {edu.school}
                            {eduIsPresent && <PresentBadge>Current</PresentBadge>}
                          </CompanyName>
                          <CompanyDuration>
                            {edu.date}
                            {edu.grade && <> · <Grade>{edu.grade}</Grade></>}
                          </CompanyDuration>
                        </CompanyInfo>
                      </CompanyHeader>
                      <SingleRole>
                        <RoleTitle>{edu.degree}</RoleTitle>
                        {edu.description && (
                          <RoleDescription>{edu.description}</RoleDescription>
                        )}
                      </SingleRole>
                    </CompanyCard>
                  </TimelineItem>
                );
              })}
            </Timeline>
          </Column>
        </TwoColumnGrid>
      </Section>

      <Footer />
    </Container>
  );
};

export default Experience;
