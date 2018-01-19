import * as React from 'react';
import './numbers.css';

export interface INumbersProps {
  selectedNumbers: number[];
  usedNumbers: number[];
  selectNumber: (number) => void;
}

export class Numbers extends React.Component {

  static list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  props: INumbersProps;

  classNameNumber = (number) => {
    if( this.props.usedNumbers.indexOf(number) >= 0 ) {
      return 'used';
    }

    if( this.props.selectedNumbers.indexOf(number) >= 0 ) {
      return 'selected';
    }

  }

  render() {
    return (
      <div className='card text-center'>
        <div>
          {Numbers.list.map((number,i) => <span key={i} className={this.classNameNumber(number)}
          onClick={() => this.props.selectNumber(number)}
          >{number}</span>)}
        </div>
      </div>
    )  
  }
}
