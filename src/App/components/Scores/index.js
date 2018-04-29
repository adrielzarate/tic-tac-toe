import React, { Fragment } from 'react';
import styled from 'styled-components';

const StyledsScoreField = styled.div`
  span {
    margin-left: 10px;
  }
`;

const Scores = () => (
  <Fragment>
    <div id="messagesField" />
    <StyledsScoreField>
      Partidas ganadas por O :
      <span id="oPointsField">0</span>
    </StyledsScoreField>
    <StyledsScoreField>
      Partidas ganadas por X :
      <span id="xPointsField">0</span>
    </StyledsScoreField>
  </Fragment>
);

export default Scores;
