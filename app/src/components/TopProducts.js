import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const StyledH1Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem;
`;

const StyledIcon = styled.i`
  font-size: 6rem !important;
  position: absolute;
  z-index: -1;
`;

const StyledHeading = styled.h2`
  background: #fff;
  padding: 0.1rem;
`;

const StyledProductContainer = styled.div`
  display: flex;
  grid-gap: 1rem;
  margin: 0 1rem;
`;

const StyledProduct = styled.div`
  padding: 1rem;
  border: 1px solid #e3e3e3;
`;

const StyledProductImg = styled.img`
  width: 100%;
`;

const TopProducts = () => {
  return (
    <>
      <StyledH1Container>
        <StyledIcon className="icon-lotus" />
        <StyledHeading>TOP PRODUCTS</StyledHeading>
      </StyledH1Container>
      <StyledProductContainer>
        <StyledProduct>
          <StyledProductImg src="/product.jpg" alt="Sample Product" />
          <h3>Sample Product Title</h3>
          <p>$25.00</p>
          <Button text="Buy" />
        </StyledProduct>
        <StyledProduct>
          <StyledProductImg src="/product.jpg" alt="Sample Product" />
          <h3>Sample Product Title</h3>
          <p>$25.00</p>
          <Button text="Buy" />
        </StyledProduct>
        <StyledProduct>
          <StyledProductImg src="/product.jpg" alt="Sample Product" />
          <h3>Sample Product Title</h3>
          <p>$25.00</p>
          <Button text="Buy" />
        </StyledProduct>
        <StyledProduct>
          <StyledProductImg src="/product.jpg" alt="Sample Product" />
          <h3>Sample Product Title</h3>
          <p>$25.00</p>
          <Button text="Buy" />
        </StyledProduct>
      </StyledProductContainer>
    </>
  );
};

export default TopProducts;
