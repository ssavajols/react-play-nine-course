import * as React from 'react';
import './stars.css';

export interface IStarsProps {
  numberOfStars: number;
}

export function Stars(props: IStarsProps) {
  
  let stars = [];
  
  for( let index=0; index<props.numberOfStars; index++) {
    stars.push(<i key={index} className="fa fa-star">X</i>);
  }
  
  return (
    <div className='col-5'>
      {stars}
    </div>
  );
}