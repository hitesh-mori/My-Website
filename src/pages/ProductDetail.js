import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { products } from '../data/constant';
import Footer from '../components/Footer';
import { FaArrowLeft, FaGithub, FaDownload, FaBook, FaCalendar, FaTag } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Container = styled.div`
  padding-top: 100px;
  min-height: 100vh;
  background: ${({ theme }) => theme.bg};
`;

const HeroSection = styled.section`
  position: relative;
  padding: 60px 24px;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}15 0%, ${({ theme }) => theme.bg} 100%);
  border-bottom: 1px solid ${({ theme }) => theme.border};
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 50%, ${({ theme }) => theme.primary}10 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, ${({ theme }) => theme.primary}08 0%, transparent 50%);
    pointer-events: none;
  }
`;

const HeroContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const BackButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 32px;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  }
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const HeroLeft = styled(motion.div)`
  @media (max-width: 900px) {
    order: 2;
  }
`;

const Category = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => `${theme.primary}15`};
  padding: 6px 12px;
  border-radius: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 16px;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 16px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Tagline = styled.p`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 24px;
  line-height: 1.6;
`;

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 32px;
  flex-wrap: wrap;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text_muted};

  svg {
    color: ${({ theme }) => theme.primary};
  }
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
`;

const Tag = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.text_secondary};
  background: ${({ theme }) => theme.bgLight};
  padding: 6px 14px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.border};
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const PrimaryButton = styled.a`
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 28px;
  background: ${({ theme }) => theme.primaryGradient};
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    /* No hover effects */
  }
`;

const SecondaryButton = styled.a`
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 28px;
  background: transparent;
  color: ${({ theme }) => theme.primary};
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    /* No hover effects */
  }
`;

const HeroRight = styled(motion.div)`
  position: relative;

  @media (max-width: 900px) {
    order: 1;
    margin-bottom: 20px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 1/1; /* Make it square and bigger */
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 0 20px rgba(0,0,0,0.2)); /* Add some depth to the standalone logo */
  }
`;

const ProductIcon = styled.div`
  font-size: 8rem;
`;

const ContentSection = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 80px 24px;
`;

const MarkdownContent = styled.div`
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.8;
  font-size: 1.05rem;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
    margin: 48px 0 24px;
    position: relative;
    padding-bottom: 16px;

    &:first-child {
      margin-top: 0;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 60px;
      height: 4px;
      background: ${({ theme }) => theme.primaryGradient};
      border-radius: 2px;
    }
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    margin: 36px 0 16px;
  }

  p {
    margin-bottom: 20px;
  }

  ul, ol {
    margin-bottom: 24px;
    padding-left: 28px;
  }

  li {
    margin-bottom: 12px;
  }

  strong {
    color: ${({ theme }) => theme.text_primary};
    font-weight: 600;
  }

  code {
    background: ${({ theme }) => theme.bgLight};
    padding: 3px 8px;
    border-radius: 6px;
    font-size: 0.9em;
    font-family: 'Fira Code', monospace;
  }

  blockquote {
    border-left: 4px solid ${({ theme }) => theme.primary};
    padding-left: 20px;
    margin: 24px 0;
    color: ${({ theme }) => theme.text_muted};
    font-style: italic;
  }
`;

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <Container>
        <HeroSection>
          <HeroContent>
            <BackButton onClick={() => navigate('/products')}>
              <FaArrowLeft /> Back to Products
            </BackButton>
            <Title>Product Not Found</Title>
          </HeroContent>
        </HeroSection>
      </Container>
    );
  }

  return (
    <Container>
      <HeroSection>
        <HeroContent>
          <BackButton
            onClick={() => navigate('/products')}
          >
            <FaArrowLeft /> Back to Products
          </BackButton>

          <HeroGrid>
            <HeroLeft
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Category>{product.category}</Category>
              <Title>{product.name}</Title>
              <Tagline>{product.tagline}</Tagline>

              <MetaInfo>
                <MetaItem>
                  <FaCalendar />
                  {product.launchDate}
                </MetaItem>
              </MetaInfo>

              <TagList>
                {product.tags.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </TagList>

              <ButtonGroup>
                <ButtonRow>
                  {product.links.github && (
                    <SecondaryButton
                      href={product.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> View Code
                    </SecondaryButton>
                  )}
                  {product.links.userGuide && (
                    <SecondaryButton
                      href={product.links.userGuide}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaBook /> User Guide
                    </SecondaryButton>
                  )}
                </ButtonRow>
                {product.links.download && (
                  <PrimaryButton
                    href={product.links.download}
                    download="BlinkLock.apk"
                  >
                    <FaDownload /> Download Application
                  </PrimaryButton>
                )}
              </ButtonGroup>

            </HeroLeft>

            <HeroRight
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ImageContainer>
                {product.image && !product.image.includes('placeholder') ? (
                  <img src={product.image} alt={product.name} />
                ) : (
                  <ProductIcon>{product.icon}</ProductIcon>
                )}
              </ImageContainer>
            </HeroRight>
          </HeroGrid>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <MarkdownContent>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {product.description}
          </ReactMarkdown>
        </MarkdownContent>
      </ContentSection>

      <Footer />
    </Container>
  );
};

export default ProductDetail;
