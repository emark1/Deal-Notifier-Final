import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header'
import { SubmitInfo } from './components/SubmitInfo'
import SweetAlert from 'sweetalert-react';

class App extends Component {

  constructor() {
    super()

  }

  render() {
    return (
      <div>
      <div className="App">
        <Header></Header>
      </div>
      <div>
        <SubmitInfo />
      </div>
      </div>
    );
  }
}

export default App;
