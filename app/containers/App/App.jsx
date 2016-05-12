import React, { Component } from 'react';
import { CommentBox } from '../../components';

import './App.css';

console.log( __DEV__ );

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CommentBox />
      </div>
    );
  }
}

export default App;
