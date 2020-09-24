import React from 'react';

class TimeOut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  
componentDidMount() {
  setTimeout(() => {
    this.setState({
      loading: false
    })
  }, 3000);

}

  render () {
    return (
      <div>
        {this.state.loading ? 'Loading...' : <h1>hellou</h1>}
      </div>
    );
  }

}

export default TimeOut;