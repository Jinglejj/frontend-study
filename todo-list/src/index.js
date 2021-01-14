import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './TodoList';

const {mockXHR} = require('./mock');
mockXHR();

ReactDOM.render(
    <React.StrictMode>
        <TodoList/>
    </React.StrictMode>,
    document.getElementById('root')
);
