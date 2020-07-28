import React from 'react';
import PropTypes from 'prop-types';

function Header({ title, subTitle }) {
  return (
    <>
      <h1>{title}</h1>
      <h4>{subTitle}</h4>
    </>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
}

export default Header;