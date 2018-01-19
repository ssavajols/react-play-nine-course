import * as React from 'react';

export interface IDoneStatusProps {
  reset: () => void;
  doneStatus: string;
}

export class DoneStatus extends React.Component {

  props: IDoneStatusProps;

  render() {
    return (
      <div>
        <h1>{this.props.doneStatus}</h1>
        <button onClick={this.props.reset}>Play again</button>
      </div>
    );
  }
}