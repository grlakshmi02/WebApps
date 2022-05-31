/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import Component from './Component';

const Wrapper = styled.div`
  .menu-item {
    align-items: center;
    background-color: transparent;
    border: 0;
    color: #ffffff;
    display: flex;
    height: 50px;
    justify-content: center;
    padding: 0 1.5rem;
    position: relative;
    transition: background-color $transition;
    width: auto;
    flex-shrink: 0;
    text-decoration: none;

    &:hover, &.active, &:focus {
      background-color: rgba(0, 0, 0, 0.2) !important;
      border: 0;
      box-shadow: none !important;
      color: #108457 !important;
      outline: none;
      text-decoration: none;
    }
  }
`;

const Icon = styled.span`
  font-size: 1rem;
  margin-right: 0;
`;

const Title = styled.span`
  font-size: 0.9rem;
  font-weight: 300;
`;

function MenuItem({
  to,
  onClick,
  title,
  icon,
  children,
  name
}) {
  return (
    <Wrapper>
      <Component
        className="menu-item"
        tag={to ? NavLink : Button}
        {...{ onClick, to }}
      >
        <Title>{ title }</Title>
        <span>{name}</span>
        <Icon className={`${icon}`} />
        { children && <>{ children }</>}
      </Component>
    </Wrapper>
  );
}

MenuItem.defaultProps = {
  children: null,
  icon: null,
  onClick: () => {},
  to: null,
};

MenuItem.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.any.isRequired,
  to: PropTypes.string,
};

export default MenuItem;
