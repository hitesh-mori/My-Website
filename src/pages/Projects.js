import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { projects } from '../data/constant';
import ProjectCard from '../components/Cards/ProjectCard';
import ProjectDetails from '../components/ProjectDetails';
import Footer from '../components/Footer';

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
  margin: 0 auto 40px;
`;

const FilterContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-bottom: 40px;
`;

const FilterButton = styled.button`
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid ${({ theme, $active }) => $active ? theme.primary : theme.border};
  background: ${({ theme, $active }) => $active ? `${theme.primary}20` : 'transparent'};
  color: ${({ theme, $active }) => $active ? theme.primary : theme.text_secondary};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const NoProjects = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Projects = ({ openModal, setOpenModal }) => {
  const [filter, setFilter] = useState('all');

  const categories = ['all', ...new Set(projects.map(p => p.category))];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

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
      <Section>
        <Header>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            My <span>Projects</span>
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            A collection of projects I've worked on, from hackathon submissions to personal explorations
          </Subtitle>
          <FilterContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {categories.map((category) => (
              <FilterButton
                key={category}
                $active={filter === category}
                onClick={() => setFilter(category)}
              >
                {category === 'all' ? 'All Projects' : category}
              </FilterButton>
            ))}
          </FilterContainer>
        </Header>

        {filteredProjects.length > 0 ? (
          <ProjectsGrid
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={filter}
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard
                  project={project}
                  setOpenModal={setOpenModal}
                />
              </motion.div>
            ))}
          </ProjectsGrid>
        ) : (
          <NoProjects>No projects found in this category.</NoProjects>
        )}
      </Section>

      {openModal.state && (
        <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
      )}

      <Footer />
    </Container>
  );
};

export default Projects;
