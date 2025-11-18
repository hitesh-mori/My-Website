import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaEye } from 'react-icons/fa';


const Card = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.border};
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  will-change: transform;

  &:hover {
    border-color: ${({ theme }) => theme.borderHover};
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadowGlow};
  }

  &:hover .card-image {
    transform: scale(1.05);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: ${({ theme }) => theme.bgLight};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.5s ease;
  padding: 10px;
`;

const Content = styled.div`
  padding: 20px;
`;

const Category = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => `${theme.primary}15`};
  padding: 4px 10px;
  border-radius: 6px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 12px 0 8px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 16px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
`;

const Tag = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.text_muted};
  background: ${({ theme }) => theme.bgLight};
  padding: 4px 10px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.border};
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid ${({ theme }) => theme.border};
`;

const Date = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.text_muted};
`;

const Actions = styled.div`
  display: flex;
  gap: 8px;
`;

const ActionButton = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  background: ${({ theme }) => theme.bgLight};
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid ${({ theme }) => theme.border};

  &:hover {
    color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: 2px;
  }
`;

const ViewButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  font-size: 0.8rem;
  font-weight: 500;
  color: white;
  background: ${({ theme }) => theme.primaryGradient};
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: 2px;
  }
`;

const OpenButton = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  font-size: 0.8rem;
  font-weight: 500;
  color: white;
  background: ${({ theme }) => theme.primaryGradient};
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: 2px;
  }
`;

const ProjectCard = ({ project, setOpenModal }) => {
  return (
    <Card
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      onClick={() => setOpenModal({ state: true, project: project })}
      style={{ cursor: 'pointer' }}
    >
      <ImageContainer>
        <Image
          className="card-image"
          src={project.image}
          alt={project.title}
          loading="lazy"
        />
      </ImageContainer>

      <Content>
        <Category>{project.category}</Category>
        <Title>{project.title}</Title>
        <Description>
          {project.shortDescription ||
           (project.description.includes('##')
             ? project.description.split('\n').find(line => line && !line.startsWith('#'))?.replace(/\*\*/g, '').trim() || project.description.substring(0, 150)
             : project.description)}
        </Description>
        <Tags>
          {project.tags.slice(0, 4).map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
          {project.tags.length > 4 && (
            <Tag>+{project.tags.length - 4}</Tag>
          )}
        </Tags>
        <Footer>
          <Date>{project.date}</Date>
          <Actions>
            <ActionButton
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code on GitHub`}
            >
              <FaGithub />
              Code
            </ActionButton>
            {project.preview ? (
              <OpenButton
                href={project.preview}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} preview`}
              >
                <FaExternalLinkAlt />
                Open
              </OpenButton>
            ) : (
              <ViewButton
                onClick={() => setOpenModal({ state: true, project: project })}
                aria-label={`View ${project.title} details`}
              >
                <FaEye />
                View
              </ViewButton>
            )}
          </Actions>
        </Footer>
      </Content>
    </Card>
  );
};

export default ProjectCard;
