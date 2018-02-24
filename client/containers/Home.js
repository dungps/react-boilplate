import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return(
      <div>
        <h1>test</h1>
        <Link to="/test">To test</Link>
      </div>
    );
  }
}