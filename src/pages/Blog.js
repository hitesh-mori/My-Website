import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/constant';
import Footer from '../components/Footer';
import { FaClock, FaArrowRight, FaCalendarAlt, FaPen, FaRocket } from 'react-icons/fa';

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

const BlogGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BlogCard = styled(motion(Link))`
  display: block;
  background: ${({ theme }) => theme.card};
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.border};
  transition: all 0.3s ease;
  text-decoration: none;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ theme }) => theme.primaryGradient};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    border-color: ${({ theme }) => theme.primary}40;
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadowGlow};

    &::before {
      transform: scaleX(1);
    }
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 180px;
  overflow: hidden;
  border-radius: 16px 16px 0 0;
`;

const BlogImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${BlogCard}:hover & {
    transform: scale(1.05);
  }
`;

const TextContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
`;

const BlogMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 12px;
  flex-wrap: wrap;
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.text_muted};
`;

const BlogTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 8px;
  line-height: 1.4;
  transition: color 0.3s ease;

  ${BlogCard}:hover & {
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const BlogExcerpt = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

const BlogTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  flex: 1;
`;

const Tag = styled.span`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => `${theme.primary}15`};
  padding: 3px 8px;
  border-radius: 4px;
  font-weight: 500;
`;

const ReadMore = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.text_muted};
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.3s ease;
  white-space: nowrap;

  ${BlogCard}:hover & {
    color: ${({ theme }) => theme.primary};
    transform: translateX(4px);
  }
`;

const EmptyState = styled(motion.div)`
  text-align: center;
  padding: 100px 40px;
  background: ${({ theme }) => theme.card};
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.border};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ theme }) => theme.primaryGradient};
  }
`;

const EmptyIconWrapper = styled(motion.div)`
  width: 120px;
  height: 120px;
  margin: 0 auto 32px;
  background: ${({ theme }) => theme.primaryGradient};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
  box-shadow: 0 20px 40px rgba(99, 102, 241, 0.3);
`;

const EmptyTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const EmptyText = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 400px;
  margin: 0 auto 32px;
  line-height: 1.6;
`;

const ComingSoonBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: ${({ theme }) => `${theme.primary}15`};
  border: 1px solid ${({ theme }) => `${theme.primary}30`};
  border-radius: 50px;
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
  font-size: 0.9rem;
`;

const Blog = () => {
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <Container>
      <Section>
        <Header>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            My <span>Blog</span>
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Thoughts, tutorials, and insights from my development journey
          </Subtitle>
        </Header>

        {blogPosts.length > 0 ? (
          <BlogGrid
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {blogPosts.map((post) => (
              <BlogCard
                key={post.id}
                to={`/blog/${post.slug}`}
                variants={itemVariants}
              >
                <CardContent>
                  <ImageContainer>
                    <BlogImage src={post.image} alt={post.title} loading="lazy" />
                  </ImageContainer>
                  <TextContent>
                    <div>
                      <BlogMeta>
                        <MetaItem>
                          <FaCalendarAlt />
                          {formatDate(post.date)}
                        </MetaItem>
                        <MetaItem>
                          <FaClock />
                          {post.readTime}
                        </MetaItem>
                      </BlogMeta>
                      <BlogTitle>{post.title}</BlogTitle>
                      <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                    </div>
                    <CardFooter>
                      <BlogTags>
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <Tag key={index}>{tag}</Tag>
                        ))}
                      </BlogTags>
                      <ReadMore>
                        Read
                        <FaArrowRight />
                      </ReadMore>
                    </CardFooter>
                  </TextContent>
                </CardContent>
              </BlogCard>
            ))}
          </BlogGrid>
        ) : (
          <EmptyState
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <EmptyIconWrapper
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <FaPen />
            </EmptyIconWrapper>
            <EmptyTitle>Coming Soon</EmptyTitle>
            <EmptyText>
              I'm working on some exciting content to share with you. Stay tuned for tutorials, insights, and development stories!
            </EmptyText>
            <ComingSoonBadge
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <FaRocket />
              Blog posts in progress
            </ComingSoonBadge>
          </EmptyState>
        )}
      </Section>

      <Footer />
    </Container>
  );
};

export default Blog;
