import React, { Component } from 'react';
import View from './view';

const X = 'x';
const O = 'o';
let one;
let two;
let three;
let four;
let five;
let six;
let seven;
let eight;
let nine;
let messagesField;
let oPointsField;
let xPointsField;
let boardCell;

class App extends Component {
  state = {
    count: 0,
    oPoints: 0,
    xPoints: 0,
  };

  componentDidMount() {
    one = document.querySelector('#board').childNodes[0];
    two = document.querySelector('#board').childNodes[1];
    three = document.querySelector('#board').childNodes[2];
    four = document.querySelector('#board').childNodes[3];
    five = document.querySelector('#board').childNodes[4];
    six = document.querySelector('#board').childNodes[5];
    seven = document.querySelector('#board').childNodes[6];
    eight = document.querySelector('#board').childNodes[7];
    nine = document.querySelector('#board').childNodes[8];

    messagesField = document.querySelector('#messagesField');
    oPointsField = document.querySelector('#oPointsField');
    xPointsField = document.querySelector('#xPointsField');
    boardCell = document.querySelectorAll('#board .btn');
  }

  winner = (player) => {
    if (
      // HORIZONTAL
      (one.classList.contains(player) &&
        two.classList.contains(player) &&
        three.classList.contains(player)) ||
      (four.classList.contains(player) &&
        five.classList.contains(player) &&
        six.classList.contains(player)) ||
      (seven.classList.contains(player) &&
        eight.classList.contains(player) &&
        nine.classList.contains(player)) ||
      // VERTICAL
      (one.classList.contains(player) &&
        four.classList.contains(player) &&
        seven.classList.contains(player)) ||
      (two.classList.contains(player) &&
        five.classList.contains(player) &&
        eight.classList.contains(player)) ||
      (three.classList.contains(player) &&
        six.classList.contains(player) &&
        nine.classList.contains(player)) ||
      // DIAGONAl
      (one.classList.contains(player) &&
        five.classList.contains(player) &&
        nine.classList.contains(player)) ||
      (three.classList.contains(player) &&
        five.classList.contains(player) &&
        seven.classList.contains(player))
    ) {
      return true;
    }
    return false;
  };

  endState(player) {
    messagesField.innerHTML = `${player} ha ganado el juego. Empieza un juego nuevo.`;
    boardCell.innerHTML = '+';
    this.cleanBoard();
  }

  play = (e) => {
    const thisEl = e.target;
    console.log(thisEl);
    if (this.winner('o')) {
      console.log('GANA O');
      this.endState(O);
    } else if (this.winner('x')) {
      console.log('GANA X');
      this.endState(X);
    } else if (this.state.count === 9) {
      console.log('EMPATE');
      this.endState('Ninguno');
    } else if (thisEl.classList.contains('disable')) {
      console.log('CELDA YA SELECCIONADA');
      messagesField.innerHTML = 'Selecciona otra celda';
    } else if (this.state.count % 2 === 0) {
      console.log('TUTRNO JUGADOR O');
      this.setState(prevState => ({
        count: prevState.count + 1,
      }));
      thisEl.innerHTML = O;
      const classesToAdd = ['disable', 'o'];
      thisEl.classList.add(...classesToAdd);
      if (this.winner('o')) {
        messagesField.innerHTML = 'O wins';
        this.setState({
          count: 0,
        });
        this.setState(prevState => ({
          oPoints: prevState.oPoints + 1,
        }));
        oPointsField.innerHTML = this.state.oPoints;
      }
    } else {
      console.log('TUTRNO JUGADOR X');
      this.setState(prevState => ({
        count: prevState.count + 1,
      }));
      thisEl.innerHTML = X;
      const classesToAdd = ['disable', 'x'];
      thisEl.classList.add(...classesToAdd);
      if (this.winner('x')) {
        messagesField.innerHTML = 'X wins';
        this.setState({
          count: 0,
        });
        this.setState(prevState => ({
          oPoints: prevState.oPoints + 1,
        }));
        xPointsField.innerHTML = this.state.xPoints;
      }
    }
  };

  cleanBoard = () => {
    const classesToRemove = ['disable', 'o', 'x'];
    Array.from(boardCell).forEach((cell) => {
      cell.innerHTML = '+';
      cell.classList.remove(...classesToRemove);
    });
    this.setState({
      count: 0,
    });
  };

  render() {
    return <View cleanBoard={this.cleanBoard} play={this.play} />;
  }
}

export default App;
