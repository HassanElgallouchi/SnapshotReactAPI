import React from 'react';

class Beatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beatches: []
    }
  }
  render () {
    return (
      <div>
        <h2>Beatch Pictures</h2>
      </div>
    );
  }

}
export default Beatch;