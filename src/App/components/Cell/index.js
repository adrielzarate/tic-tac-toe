import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { transparentize } from 'polished';
import { Button } from '../';

const StyledCell = styled(Button)`
  &.o {
    background-image: linear-gradient(to bottom, #0088cc, #0044cc);
  }
  &.x {
    background-image: linear-gradient(to bottom, #5bc0de, #2f96b4);
  }
  &.disable {
    text-transform: uppercase;
    color: ${props => props.theme.colors.white};
    text-shadow: 0 -1px 0 ${props => transparentize(0.25, props.theme.colors.black)};
  }
`;

const Cell = ({ play }) => (
  <StyledCell className="btn" onClick={play}>
    +
  </StyledCell>
);

Cell.propTypes = {
  play: PropTypes.func.isRequired,
};

export default Cell;
