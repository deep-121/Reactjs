import React, { Component } from 'react';
import Form from './component/AddForm';
// import Table from './component/Table';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form/>
        {/* <Table /> */}
      </div>
    );
  }
}

export default App;
