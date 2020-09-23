import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {

  render() {
    return (
      <nav>
        <ul>
          <li><Link to='/food'>Food</Link></li>
          <li><Link to='/bird'>Bird</Link></li>
          <li><Link to='/beatch'>Beatch</Link></li>
          <li><Link to='/mountain'>Montain</Link></li>
        </ul>
      </nav>
    );
  }
}
export default Navigation;