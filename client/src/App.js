
import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Example from './components/beta';
import Example from './components/projects';

export const style={
    width:'100vw',
    height: '100vh',
    overflow: 'auto',
    backgroundPosition: 'center',
    backgroundColor: 'black',
    backgroundRepeat: 'no-repeat',
    backgroundImage:'url("/adg-logo.jpeg")'
}

class App extends Component {
  render() {
    return (
      <Switch>
        <div className="App1" style={style}>
          <Switch>
            <Route path='/' component={Example} />
            <Route path='/hello' Component={Example} />
            {/*  change to dashboard components*/}
            <Route path='/dashboard' Component={Example} />
            </Switch>
          {/* <img src='https://yt3.ggpht.com/a/AGF-l7-wxI7DLGTXjXY0-SYuB7Os-aFHwgmtf4jPUQ=s900-c-k-c0xffffffff-no-rj-mo'/> */}
          {/* <header className="App-header">
            //     <img src={logo} className="App-logo" alt="logo" />
            //     <h1 className="App-title">React Express Starter</h1>
            //   </header>
          //   <Customers /> */}
        </div>
      </Switch>
    );
  }
}

export default App;
