import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaCalendar } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 1000;
  overflow-y: auto;
`;

const Modal = styled(motion.div)`
  max-width: 1100px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  background: ${({ theme }) => theme.card};
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.border};
  position: relative;

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.border};
    border-radius: 3px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.bgGlass};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  color: ${({ theme }) => theme.text_primary};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
    transform: rotate(90deg);
  }
`;

const ModalContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const LeftColumn = styled.div`
  padding: 24px;
  border-right: 1px solid ${({ theme }) => theme.border};

  @media (max-width: 900px) {
    border-right: none;
    border-bottom: 1px solid ${({ theme }) => theme.border};
  }
`;

const RightColumn = styled.div`
  padding: 24px;
  overflow-y: auto;
  max-height: 80vh;

  @media (max-width: 900px) {
    max-height: none;
  }

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.border};
    border-radius: 2px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 20px;
`;

const Category = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => `${theme.primary}15`};
  padding: 6px 12px;
  border-radius: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin: 16px 0 12px;

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const Date = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.text_muted};
  margin-bottom: 20px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`;

const Tag = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.text_secondary};
  background: ${({ theme }) => theme.bgLight};
  padding: 6px 12px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.border};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Button = styled.a`
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 16px;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:first-child {
    background: ${({ theme }) => theme.primaryGradient};
    color: white;
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(99, 102, 241, 0.5);
    }
  }

  &:last-child {
    background: transparent;
    color: ${({ theme }) => theme.primary};
    border: 2px solid ${({ theme }) => theme.primary};

    &:hover {
      background: ${({ theme }) => `${theme.primary}15`};
      transform: translateY(-3px);
    }
  }
`;

const MarkdownContent = styled.div`
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.8;
  font-size: 0.95rem;

  h2 {
    font-size: 1.25rem;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    margin: 24px 0 12px;

    &:first-child {
      margin-top: 0;
    }
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    margin: 20px 0 10px;
  }

  p {
    margin-bottom: 16px;
  }

  ul, ol {
    margin-bottom: 16px;
    padding-left: 24px;
  }

  li {
    margin-bottom: 8px;
  }

  strong {
    color: ${({ theme }) => theme.text_primary};
    font-weight: 600;
  }

  code {
    background: ${({ theme }) => theme.bgLight};
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.85rem;
  }

  blockquote {
    border-left: 3px solid ${({ theme }) => theme.primary};
    padding-left: 16px;
    margin: 16px 0;
    color: ${({ theme }) => theme.text_muted};
    font-style: italic;
  }
`;

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;

  if (!project) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setOpenModal({ state: false, project: null });
    }
  };

  return (
    <AnimatePresence>
      {openModal.state && (
        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleOverlayClick}
        >
          <Modal
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <CloseButton onClick={() => setOpenModal({ state: false, project: null })}>
              <FaTimes />
            </CloseButton>

            <ModalContent>
              <LeftColumn>
                <Image src={project.image} alt={project.title} />
                <Category>{project.category}</Category>
                <Title>{project.title}</Title>
                <Date>
                  <FaCalendar />
                  {project.date}
                </Date>
                <Tags>
                  {project.tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </Tags>
                <ButtonGroup>
                  <Button
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                    View Code
                  </Button>
                  {project.preview && (
                    <Button
                      href={project.preview}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt />
                      Open Project
                    </Button>
                  )}
                </ButtonGroup>
              </LeftColumn>

              <RightColumn>
                <MarkdownContent>
                  <ReactMarkdown>{project.description}</ReactMarkdown>
                </MarkdownContent>
              </RightColumn>
            </ModalContent>
          </Modal>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetails;
