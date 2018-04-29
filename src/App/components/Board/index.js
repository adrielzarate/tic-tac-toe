import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Cell from '../Cell';

const StyledWrapper = styled.div`
  width: 270px;
  margin: ${props => props.theme.space.sm};
`;

let listKey = 0;
const Board = ({ play }) => (
  <StyledWrapper id="board">
    {Array.from({ length: 9 }).map(() => {
      listKey += 1;
      return <Cell key={listKey} play={play} />;
    })}
  </StyledWrapper>
);

Board.propTypes = {
  play: PropTypes.func.isRequired,
};

export default Board;
