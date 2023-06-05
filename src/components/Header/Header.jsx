import React from 'react';
import { MainHeader } from './Header.styled';
import PropTypes from 'prop-types';

export const Header = ({ title }) => {
  return <MainHeader>{title}</MainHeader>;
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
