import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Collapse } from 'reactstrap';

import MenuItem from './MenuItem';

const Collapsible = styled.div`
  .collapsible {
    background-color: rgba(0, 0, 0, 0.075);

    .menu-item {
      padding: 0 1.5rem;
  
      span {
        margin-left: 1.5rem;
      }
    }
  }
`;

const Indicator = styled.span`
  background-color: #363d4a;
  border-radius: 50%;
  position: absolute;
  right: 1.25rem;
  top: 50%;
  transition: transform 0.4s;
  font-size: 0.75rem;
  transform: ${(props) => (props.open ? 'rotate(0deg)' : 'rotate(-90deg)')};
`;

function MenuAccordion({
  children, icon, open, title, name
}) {
  const [isOpen, setIsOpen] = useState(open);

  const events = {
    onToggleButtonClick: (e) => {
      e.preventDefault();
      setIsOpen(!isOpen);
    },
  };

  return (
    <>
      <MenuItem icon={icon} name={name} title={title} onClick={events.onToggleButtonClick}>
        <Indicator open={isOpen} className="lnr lnr-chevron-down-circle" />
      </MenuItem>

      <Collapsible>
        <Collapse className="collapsible" isOpen={isOpen}>
          { children }
        </Collapse>
      </Collapsible>
    </>
  );
}

MenuAccordion.defaultProps = {
  children: null,
  icon: null,
  open: false,
  title: null,
  name: null,
};

MenuAccordion.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string,
  open: PropTypes.bool,
  title: PropTypes.string,
  name: PropTypes.string,
};

export default MenuAccordion;
