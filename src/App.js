import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    activeLink: null
  };
  
  render() {
    return (
      <div className="header">
        <div className="text-container">
          <h2>
            <span className="header-text--primary">Udhay hari</span>
            <span className="header-text--secondary">front end developer</span>
          </h2>
            <a class="button white--button" href="/" >
              Projects
            </a>  
        </div>  
      </div>
    );
  }
}

export default App;
