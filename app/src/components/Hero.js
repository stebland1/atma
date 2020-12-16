import React from 'react';
import HeroImage from '../assets/img/hero.jpg';
import styled from 'styled-components';
import Button from '../components/Button';

const StyledHero = styled.div`
  background-image: url(${HeroImage});
  background-size: cover;
  background-position-y: 75%;
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledHeading = styled.h1`
  font-size: 3rem;
  text-align: center;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
  color: #fff;
  display: block;

  & span {
    display: block;
    font-size: 1.25rem;
    padding: 0.5rem;
  }
`;

const Hero = () => {
  return (
    <StyledHero>
      <StyledHeading>
        Fragments
        <span>from</span>
        afar
      </StyledHeading>
      <Button text="Shop" link="/shop/new-arrivals" primary />
    </StyledHero>
  );
};

export default Hero;
