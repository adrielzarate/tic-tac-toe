import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '../';

const StyledBtnReset = styled(Button)`
  color: ${props => props.theme.colors.black};
  font-family: Arial, Helvetica, sans-serif;
  font-size: ${props => props.theme.fontSizes.md};
  width: 200px;
`;

const BtnReset = ({ cleanBoard }) => (
  <StyledBtnReset id="btn" onClick={cleanBoard}>
    Reset
  </StyledBtnReset>
);

BtnReset.propTypes = {
  cleanBoard: PropTypes.func.isRequired,
};

export default BtnReset;
