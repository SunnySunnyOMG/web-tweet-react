import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// load components
import Nav from './component/Nav';
import Page from './component/Page';

// load assets
import logo from './img/logo.png';
import avatar from './img/sample-avatar.png';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav logo={logo} avatar={avatar} />
          <Page avatar={avatar} />
        </div>
      </Router>
    );
  }
}

export default App;
