import React from 'react';

class Food extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: []
    }
  }

  render () {
    return (
      <div>
        <h2>Food Pictures</h2>
      </div>
    );
  }

}
export default Food;