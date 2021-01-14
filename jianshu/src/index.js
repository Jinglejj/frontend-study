import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyled} from './style'
import {GlobalIconFontStyled} from "./statics/iconfont/iconfont";
ReactDOM.render(
    <React.StrictMode>
        <App/>
        <GlobalStyled/>
        <GlobalIconFontStyled/>
    </React.StrictMode>,
    document.getElementById('root')
);

