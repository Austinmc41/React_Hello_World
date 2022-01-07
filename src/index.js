import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // imports the style for the page 
// import App from './App'; //imports the APP component 
import Hello from './Hello'
import reportWebVitals from './reportWebVitals';
import 'tachyons';

ReactDOM.render(
  <React.StrictMode>
  <Hello greeting = {"Hello React Ninja"} />
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM, which interacts with the DOM on the brower, renders everything inside tag in root
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
