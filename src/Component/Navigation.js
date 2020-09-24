import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {

  render() {
    return (
      <nav>
        <ul>
          <li><Link to='/cars'>Cars</Link></li>
          <li><Link to='/bikes'>Bikes</Link></li>
          <li><Link to='/motos'>Motos</Link></li>
          <li><Link to='/planes'>Planes</Link></li>
        </ul>
      </nav>
    );
  }
}
export default Navigation;