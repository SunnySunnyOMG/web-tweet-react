import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// load components
import Page from './component/Page';

class App extends Component {
  render() {
    return (
      <Router>  
          <Page />
      </Router>
    );
  }
}

export default App;
