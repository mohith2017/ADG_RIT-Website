import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Example from './components/beta';

class App extends Component {
  render() {
    return (
      <div className="App1" style={{width:'100vw',height:'1000px',backgroundSize: 'cover',backgroundImage:'url("https://yt3.ggpht.com/a/AGF-l7-wxI7DLGTXjXY0-SYuB7Os-aFHwgmtf4jPUQ=s900-c-k-c0xffffffff-no-rj-mo")'}}>

      <Example />
      // //   {/* <img src='https://yt3.ggpht.com/a/AGF-l7-wxI7DLGTXjXY0-SYuB7Os-aFHwgmtf4jPUQ=s900-c-k-c0xffffffff-no-rj-mo'/> */}
      //   {/* <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">React Express Starter</h1>
      //   </header>
      //   <Customers /> */}
     </div>
    );
  }
}

export default App;
