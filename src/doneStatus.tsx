import * as React from 'react';

export interface IDoneStatusProps {
  reset: () => void;
  doneStatus: string;
}

export const DoneStatus = (props: IDoneStatusProps) => (
  <div className="text-center">
    <h1>{props.doneStatus}</h1>
    <button onClick={props.reset}>Play again</button>
  </div>
);
