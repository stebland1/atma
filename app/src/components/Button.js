import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-block;
  letter-spacing: 0.1rem;
  border: 1px solid ${(props) => (props.primary ? 'white' : 'black')};
  padding: 0.5rem 1.5rem;
  margin: 0;
  text-decoration: none;
  text-transform: uppercase;
  background: transparent;
  color: ${(props) => (props.primary ? 'white' : 'black')};
  font-size: 0.75rem;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:hover {
    background: ${(props) => (props.primary ? 'white' : 'black')};
    color: ${(props) => (props.primary ? 'black' : 'white')};
  }
`;

const Button = ({ text, link, primary }) => {
  return (
    <Link to={link}>
      <StyledButton primary={primary}>{text}</StyledButton>
    </Link>
  );
};

Button.defaultProps = {
  primary: false,
};

export default Button;
