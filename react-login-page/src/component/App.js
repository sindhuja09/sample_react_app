import React, { Component } from 'react';

import RegisterationForm from './Form';
import '../css/style.css';


class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="form">
          <RegisterationForm/>
        </div>
      </div>
    )
  }
}

export default App;
