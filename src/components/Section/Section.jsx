import React from 'react';
import { SectionWrapper } from './Section.styled';
import { Header } from 'components/Header/Header';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <SectionWrapper>
      <Header title={title} />
      {children}
    </SectionWrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
