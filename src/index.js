import React from 'react';
import ReactDOM from 'react-dom';

import './css/normalize.css';
import './css/fontawesome-all.css';
import './css/columns.css';
import './css/main.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
