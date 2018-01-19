import * as React from 'react';
import { Numbers } from './numbers/numbers';
import { Button } from './button';
import { Stars } from './stars/stars';
import { Answer } from './answer';
import { DoneStatus } from './doneStatus';

export interface IGameState {
  selectedNumbers: number[];
  usedNumbers: number[];
  numberOfStars: number;
  answerIsCorrect: boolean;
  redraws: number;
  doneStatus: string;
} 

export class Game extends React.Component {
  
  static randomNumbers(): number {
    return Math.ceil(Math.random()*9);
  }

  static initialState = (): IGameState  => ({
      selectedNumbers: [],
      usedNumbers: [],
      numberOfStars: Game.randomNumbers(),
      answerIsCorrect: null,
      redraws: 5,
      doneStatus: '',
  });

  state: IGameState = Game.initialState();

  selectNumber = (number) => {
    if( this.state.selectedNumbers.indexOf(number) >= 0 ){ return; }
    
    this.setState((prevState: IGameState) => ({
      selectedNumbers: [...this.state.selectedNumbers, number],
      answerIsCorrect: null,
    }));
  }
  
  unSelectNumber = (number) => {
    this.setState((prevState: IGameState) => ({
        selectedNumbers: prevState.selectedNumbers.filter(n => n != number),
        answerIsCorrect: null
    }));
  }

  acceptAnswer = () => {
    this.setState((prevState: IGameState) => ({
      selectedNumbers: [],
      answerIsCorrect: null,
      numberOfStars: Game.randomNumbers(),
      usedNumbers: [...prevState.usedNumbers, ...prevState.selectedNumbers],
      doneStatus: prevState.usedNumbers.length + prevState.selectedNumbers.length === 9 ? 'OK' : ''
    }));
  } 
  
  checkAnswer = () => {
    this.setState((prevState: IGameState) => ({
      answerIsCorrect: this.state.selectedNumbers.reduce((acc, n) => acc + n) === this.state.numberOfStars
    }));
  }

  redraw = () => {
    this.setState((prevState: IGameState) => ({
      redraws: prevState.redraws-1,
      numberOfStars: Game.randomNumbers(),
      answerIsCorrect: null,
      selectedNumbers: [],
      doneStatus: prevState.redraws === 1 ? 'Stop' : ''
    }));
  }

  reset = () => {
    this.setState(Game.initialState());
  }

  render() {
    return (
      <div className='container'>
        <h3>Play nine</h3>
        <div className='row'>
          <Stars 
              numberOfStars={this.state.numberOfStars} />
          <Button
              answerIsCorrect={this.state.answerIsCorrect}
              acceptAnswer={this.acceptAnswer}
              selectedNumbers={this.state.selectedNumbers} 
              checkAnwser={this.checkAnswer}
              redraws={this.state.redraws}
              redraw={this.redraw} />
          <Answer 
              unSelectNumber={this.unSelectNumber} 
              selectedNumbers={this.state.selectedNumbers} />
        </div>
        {this.state.doneStatus !== '' ? 
        <DoneStatus 
        doneStatus={this.state.doneStatus}
        reset={this.reset} /> :
        <Numbers 
            selectNumber={this.selectNumber} 
            selectedNumbers={this.state.selectedNumbers}
            usedNumbers={this.state.usedNumbers} />
        }
      </div>
    )
  }
}

