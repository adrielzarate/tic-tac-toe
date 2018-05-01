import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '../';

const StyledCell = styled(Button)`
  &.o {
    background-image: linear-gradient(to bottom, #0088cc, #0044cc);
    &.disabled:hover {
      background-image: linear-gradient(to bottom, #0088cc, #0044cc);
    }
  }
  &.x {
    background-image: linear-gradient(to bottom, #5bc0de, #2f96b4);
    &.disabled:hover {
      background-image: linear-gradient(to bottom, #5bc0de, #2f96b4);
    }
  }
  &.disabled {
    &:hover {
      background: ${props => props.theme.colors.white};
    }
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
