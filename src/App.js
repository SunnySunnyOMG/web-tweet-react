import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import histroy from './module/navigation';

import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "./models";

// load components
import Page from './component/Page';

// generate Redux store
const store = init({
  models
});

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router history={histroy}>
          <Page />
        </Router>
      </Provider>
    );
  }
}

export default App;
