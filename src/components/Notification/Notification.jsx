import React from 'react';
import { Msg } from './Notification.styled';
import PropTypes from 'prop-types';

export const Notification = ({ msg }) => {
  return <Msg Msg>{msg}</Msg>;
};

Notification.propTypes = {
  msg: PropTypes.string.isRequired,
};
