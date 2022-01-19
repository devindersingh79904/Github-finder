import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
module.exports = require('./TodaysDate.js')
ReactDOM.render(
  <React.StrictMode>
    <App />
    <TodaysDate />
  </React.StrictMode>,
  document.getElementById('root')
);
