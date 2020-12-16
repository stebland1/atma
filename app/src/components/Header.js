import React from 'react';
import Logo from '../assets/img/logo.svg';
import Nav from './Nav';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeadStyles = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoStyles = styled.img`
  width: 70px;
`;

const Header = () => {
  return (
    <HeadStyles>
      <Link to="/">
        <LogoStyles src={Logo} alt="Atma" />
      </Link>
      <Nav />
    </HeadStyles>
  );
};

export default Header;
