import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledUl = styled.ul`
  list-style: none;
  margin: 0 4rem;
  padding: 0;
  display: flex;
`;

const StyledLi = styled.li`
  padding: 1rem 2rem;
`;

const StyledIcon = styled.i`
  display: block;
  padding: 0.5rem;
`;

const StyledNavLink = styled(NavLink)`
  &.is-active {
    position: relative;
    font-weight: bold;

    &:before {
      content: '';
      background: red;
      border-radius: 50%;
      position: absolute;
      z-index: -1;
      margin: auto;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 15px;
      height: 15px;
      opacity: 0.2;
    }
  }
`;

const StyledUserNav = styled.div`
  display: flex;
  font-size: 0.5rem;
  text-align: center;

  & ${StyledNavLink} {
    margin-right: 1rem;
  }
`;

const Nav = () => {
  return (
    <>
      <div className="nav">
        <StyledUl>
          <StyledLi>
            <StyledNavLink activeClassName="is-active" exact to="/">
              HOME
            </StyledNavLink>
          </StyledLi>
          <StyledLi>
            <StyledNavLink activeClassName="is-active" to="/shop">
              SHOP
            </StyledNavLink>
          </StyledLi>
          <StyledLi>
            <StyledNavLink activeClassName="is-active" to="/about">
              ABOUT
            </StyledNavLink>
          </StyledLi>
          <StyledLi>
            <StyledNavLink activeClassName="is-active" to="/contact">
              CONTACT
            </StyledNavLink>
          </StyledLi>
        </StyledUl>
      </div>
      <StyledUserNav>
        <StyledNavLink to="/login" activeClassName="is-active">
          <StyledIcon className="icon-login" /> LOGIN
        </StyledNavLink>
        <StyledNavLink to="/basket" activeClassName="is-active">
          <StyledIcon className="icon-basket" /> BASKET
        </StyledNavLink>
      </StyledUserNav>
    </>
  );
};

export default Nav;
