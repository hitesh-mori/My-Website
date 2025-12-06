import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '../data/constant';
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

const ProductsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled(motion(Link))`
  background: ${({ theme }) => theme.card};
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.border};
  transition: all 0.3s ease;
  text-decoration: none;
  display: block;

  &:hover {
    border-color: ${({ theme }) => theme.borderHover};
  }

  &:hover .product-image {
    /* No transform */
  }
`;

const ProductImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: ${({ theme }) => theme.bgLight};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.5s ease;
  padding: 10px;
`;

const ProductIcon = styled.div`
  font-size: 4rem;
`;

const ProductContent = styled.div`
  padding: 20px;
`;

const ProductCategory = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => `${theme.primary}15`};
  padding: 4px 10px;
  border-radius: 6px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ProductName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 12px 0 8px;
`;

const ProductTagline = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
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

const ExploreButton = styled.button`
  width: 100%;
  padding: 12px 20px;
  margin-top: 16px;
  background: ${({ theme }) => theme.primaryGradient};
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);

  &:hover {
    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5);
  }
`;

const Products = () => {
  const [filter, setFilter] = useState('all');

  const categories = ['all', ...new Set(products.map(p => p.category))];

  const filteredProducts = filter === 'all'
    ? products
    : products.filter(p => p.category === filter);

  return (
    <Container>
      <Section>
        <Header>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            My <span>Products</span>
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Applications and tools I've built and actively maintain for users
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
                {category === 'all' ? 'All Products' : category}
              </FilterButton>
            ))}
          </FilterContainer>
        </Header>

        <ProductsGrid>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} to={`/products/${product.slug}`}>
              <ProductImageContainer>
                {product.image && !product.image.includes('placeholder') ? (
                  <ProductImage className="product-image" src={product.image} alt={product.name} />
                ) : (
                  <ProductIcon className="product-image">{product.icon}</ProductIcon>
                )}
              </ProductImageContainer>
              <ProductContent>
                <ProductCategory>{product.category}</ProductCategory>
                <ProductName>{product.name}</ProductName>
                <ProductTagline>{product.tagline}</ProductTagline>
                <Tags>
                  {product.tags.slice(0, 4).map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                  {product.tags.length > 4 && (
                    <Tag>+{product.tags.length - 4}</Tag>
                  )}
                </Tags>
                <ExploreButton>
                  Explore More
                </ExploreButton>
              </ProductContent>
            </ProductCard>
          ))}
        </ProductsGrid>
      </Section>

      <Footer />
    </Container>
  );
};

export default Products;
