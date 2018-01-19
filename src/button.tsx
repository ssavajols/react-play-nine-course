import * as React from 'react';

export interface IButtonProps {
  checkAnwser: () => void;
  acceptAnswer: () => void;
  selectedNumbers: number[];
  answerIsCorrect: boolean;
}

export function Button(props: IButtonProps) {
  let button;

  switch(props.answerIsCorrect) {
    case true:
      button = 
        <button 
          onClick={props.acceptAnswer}
          >/</button>;
    break;
    case false:
      button = 
        <button 
          disabled={true}
          >X</button>;
    break;
    default:
      button = 
        <button 
          disabled={props.selectedNumbers.length === 0}
          onClick={props.checkAnwser}
          >=</button>;
  } 
  return (
    <div className='col-2'>
      {button}  
    </div>
  );
}