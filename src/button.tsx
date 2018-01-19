import * as React from 'react';

export interface IButtonProps {
  checkAnwser: () => void;
  acceptAnswer: () => void;
  redraw: () => void;
  selectedNumbers: number[];
  answerIsCorrect: boolean;
  redraws: number;
}

export function Button(props: IButtonProps) {
  let button;

  switch(props.answerIsCorrect) {
    case true:
      button = 
        <button
          className="btn btn-success" 
          onClick={props.acceptAnswer}
          ><i className="fa fa-check"></i></button>;
    break;
    case false:
      button = 
        <button 
          className="btn btn-danger"   
          disabled={true}
          ><i className="fa fa-times"></i></button>;
    break;
    default:
      button = 
        <button 
          className="btn"
          disabled={props.selectedNumbers.length === 0}
          onClick={props.checkAnwser}
          >=</button>;
  } 
  return (
    <div className='col-2'>
      {button}  
      <br />
      <button
              className="btn btn-warning btn-sm"
              disabled={props.redraws === 0}
              onClick={props.redraw}>
              <i className="fa fa-refresh"></i> {props.redraws}</button>
    </div>
  );
}