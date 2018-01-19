import * as React from 'react';

export interface IAnswerProps {
  selectedNumbers: number[];
  unSelectNumber: (number) => void;
}

export function Answer(props: IAnswerProps){
  return (
    <div className='col-5'>
      {props.selectedNumbers.map((number, i) => <span key={i}
          onClick={() => props.unSelectNumber(number)}
          >{number}</span>)}
    </div>
  );
}