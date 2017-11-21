import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './routers/AppRouter.js';
import registerServiceWorker from './registerServiceWorker';

import './styles/index.css';

ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
