import React from 'react';
import PropTypes from 'prop-types';

function Component({
  tag: Tag, className, children, ...props
}) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Tag {...props} className={`component ${className}`}>
      { children }
    </Tag>
  );
}

Component.defaultProps = {
  children: null,
  className: null,
  id: null,
  tag: null,
  type: null,
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  tag: PropTypes.elementType,
  type: PropTypes.string,
};

Component.defaultProps = {
  tag: 'div',
};

export default Component;
