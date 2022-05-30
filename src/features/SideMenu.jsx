import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Menu = styled.div`
  background-color: #343a40;
  display: flex;
  justify-content: end;
  width: 300px;
  z-index: 10;
  height: calc(100vh - 12px);
`;

const Wrapper = styled.div`
  position: fixed;
  width: 300px;
  flex-direction: column;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Footer = styled.footer`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin-bottom: 4rem;
  align-items: center;
  color: white;
`;

function SideMenu({ children }) {

  return (
    <Menu>
      <Wrapper>
        {children}
      </Wrapper>
      <Footer>
        <p>Lakshmi G R</p>
        <span>grlakshmi02@gmail.com</span>
      </Footer>
    </Menu>
  );
}

SideMenu.defaultProps = {
  children: null,
};

SideMenu.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default SideMenu;
