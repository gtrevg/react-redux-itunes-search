import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Search from './components/Search';
import Detail from './components/Detail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React & Redux iTunes Search Tool</h1>
        </header>
        <div className="App-body">
          <Router>
            <div>
              <Route exact path="/" component={Search} />
              <Route path="/detail" component={Detail} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
