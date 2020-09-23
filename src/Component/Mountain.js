import React from 'react';

class Mountain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mountains: []
    }
  }
  render () {
    return (
      <div>
        <h2>Mountain Pictures</h2>
      </div>
    );
  }

}
export default Mountain;