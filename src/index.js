import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Search from './Search'

ReactDOM.render(<Search />, document.getElementById('root'));
registerServiceWorker();
