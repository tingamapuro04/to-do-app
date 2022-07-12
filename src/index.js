import React from 'react';
import ReactDom from 'react-dom';
import TodoContainer from './components/TodoContainer.js';

ReactDom.render(<React.StrictMode><TodoContainer /></React.StrictMode>, document.querySelector('#root'))