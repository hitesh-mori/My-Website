import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { blogPosts } from '../data/constant';
import Footer from '../components/Footer';
import { FaClock, FaArrowLeft, FaCalendarAlt, FaCopy, FaCheck } from 'react-icons/fa';

const Container = styled.div`
  padding-top: 120px;
  min-height: 100vh;
`;

const Section = styled.section`
  padding: 40px 24px 100px;
  max-width: 800px;
  margin: 0 auto;
`;

const BackButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_secondary};
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 32px;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    transform: translateX(-5px);
  }
`;

const Header = styled(motion.div)`
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text_muted};
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => `${theme.primary}15`};
  padding: 4px 12px;
  border-radius: 6px;
  font-weight: 500;
`;

const CoverImage = styled(motion.img)`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 40px;
  border: 1px solid ${({ theme }) => theme.border};
`;

const Content = styled(motion.div)`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 1.05rem;
  line-height: 1.8;

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.text_primary};
    margin: 40px 0 20px;
    font-weight: 700;
    line-height: 1.4;
  }

  h1 { font-size: 2rem; }
  h2 {
    font-size: 1.6rem;
    padding-bottom: 12px;
    border-bottom: 2px solid ${({ theme }) => theme.border};
  }
  h3 { font-size: 1.3rem; }

  p {
    margin-bottom: 20px;
  }

  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
      text-decoration: underline;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    margin: 24px 0;
    border: 1px solid ${({ theme }) => theme.border};
  }

  code {
    background: ${({ theme }) => `${theme.primary}15`};
    padding: 3px 8px;
    border-radius: 6px;
    font-size: 0.85em;
    font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
    color: ${({ theme }) => theme.primary};
    font-weight: 500;
  }

  pre {
    margin: 24px 0;
    border-radius: 12px;
    overflow: hidden;

    code {
      background: transparent;
      padding: 0;
      color: ${({ theme }) => theme.text_primary};
      font-weight: 400;
    }
  }

  blockquote {
    border-left: 4px solid ${({ theme }) => theme.primary};
    padding: 16px 20px;
    margin: 24px 0;
    background: ${({ theme }) => `${theme.primary}08`};
    border-radius: 0 12px 12px 0;
    color: ${({ theme }) => theme.text_secondary};
    font-style: italic;

    p {
      margin: 0;
    }
  }

  ul, ol {
    margin: 20px 0;
    padding-left: 24px;

    li {
      margin-bottom: 12px;
      padding-left: 8px;
    }
  }

  ul li::marker {
    color: ${({ theme }) => theme.primary};
  }

  ol li::marker {
    color: ${({ theme }) => theme.primary};
    font-weight: 600;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 24px 0;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid ${({ theme }) => theme.border};

    th, td {
      padding: 14px 16px;
      text-align: left;
      border-bottom: 1px solid ${({ theme }) => theme.border};
    }

    th {
      background: ${({ theme }) => theme.bgLight};
      color: ${({ theme }) => theme.text_primary};
      font-weight: 600;
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    tr:last-child td {
      border-bottom: none;
    }

    tr:hover td {
      background: ${({ theme }) => `${theme.primary}05`};
    }
  }

  hr {
    border: none;
    border-top: 2px solid ${({ theme }) => theme.border};
    margin: 40px 0;
  }

  strong {
    color: ${({ theme }) => theme.text_primary};
    font-weight: 600;
  }
`;

const CodeBlockWrapper = styled.div`
  position: relative;
  margin: 24px 0;
  border-radius: 12px;
  overflow: hidden;
  background: ${({ theme }) => theme.bgLight};
  border: 1px solid ${({ theme }) => theme.border};
`;

const CodeHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  background: ${({ theme }) => theme.card};
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

const LanguageLabel = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const CopyButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: ${({ $copied, theme }) => $copied ? `${theme.success}20` : 'transparent'};
  color: ${({ $copied, theme }) => $copied ? theme.success : theme.text_muted};
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid ${({ $copied, theme }) => $copied ? theme.success : theme.border};
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ $copied, theme }) => $copied ? `${theme.success}20` : `${theme.primary}15`};
    color: ${({ $copied, theme }) => $copied ? theme.success : theme.primary};
    border-color: ${({ $copied, theme }) => $copied ? theme.success : theme.primary};
  }
`;

const CodeContent = styled.pre`
  margin: 0 !important;
  padding: 20px !important;
  background: transparent !important;
  border: none !important;
  border-radius: 0 !important;
  overflow-x: auto;

  code {
    font-size: 0.9rem !important;
    line-height: 1.6 !important;
  }
`;

const NotFound = styled.div`
  text-align: center;
  padding: 80px 20px;
`;

const NotFoundTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 16px;
`;

const NotFoundText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 24px;
`;

// Custom code block component with copy functionality
const CodeBlock = ({ language, children }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const displayLanguage = language || 'code';

  return (
    <CodeBlockWrapper>
      <CodeHeader>
        <LanguageLabel>{displayLanguage}</LanguageLabel>
        <CopyButton onClick={handleCopy} $copied={copied}>
          {copied ? (
            <>
              <FaCheck size={12} />
              Copied!
            </>
          ) : (
            <>
              <FaCopy size={12} />
              Copy
            </>
          )}
        </CopyButton>
      </CodeHeader>
      <CodeContent>
        <code>{children}</code>
      </CodeContent>
    </CodeBlockWrapper>
  );
};

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const post = blogPosts.find(p => p.slug === slug);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Custom components for ReactMarkdown
  const components = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      const language = match ? match[1] : '';

      if (!inline && (match || String(children).includes('\n'))) {
        return (
          <CodeBlock language={language}>
            {String(children).replace(/\n$/, '')}
          </CodeBlock>
        );
      }

      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
    pre({ children }) {
      // Return children directly since CodeBlock handles the wrapper
      return <>{children}</>;
    }
  };

  if (!post) {
    return (
      <Container>
        <Section>
          <BackButton
            onClick={() => navigate('/blog')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaArrowLeft />
            Back to Blog
          </BackButton>
          <NotFound>
            <NotFoundTitle>Post Not Found</NotFoundTitle>
            <NotFoundText>
              The blog post you're looking for doesn't exist or has been removed.
            </NotFoundText>
          </NotFound>
        </Section>
        <Footer />
      </Container>
    );
  }

  return (
    <Container>
      <Section>
        <BackButton
          onClick={() => navigate('/blog')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <FaArrowLeft />
          Back to Blog
        </BackButton>

        <Header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Title>{post.title}</Title>
          <Meta>
            <MetaItem>
              <FaCalendarAlt />
              {formatDate(post.date)}
            </MetaItem>
            <MetaItem>
              <FaClock />
              {post.readTime}
            </MetaItem>
          </Meta>
          <Tags>
            {post.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </Tags>
        </Header>

        {post.image && (
          <CoverImage
            src={post.image}
            alt={post.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          />
        )}

        <Content
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={components}
          >
            {post.content || post.excerpt}
          </ReactMarkdown>
        </Content>
      </Section>

      <Footer />
    </Container>
  );
};

export default BlogPost;
