import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import { normalize } from 'polished';

import { Board, BtnReset, Scores } from './components';
import theme from './theme';

injectGlobal`
  ${normalize()}
`;

injectGlobal`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  #root {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const StyledWrapper = styled.div`
  text-align: center;
`;

const App = ({ cleanBoard, play }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <StyledWrapper>
        <Scores />
        <Board play={play} />
        <BtnReset cleanBoard={cleanBoard} />
      </StyledWrapper>
    </Fragment>
  </ThemeProvider>
);

App.propTypes = {
  cleanBoard: PropTypes.func.isRequired,
  play: PropTypes.func.isRequired,
};

export default App;
