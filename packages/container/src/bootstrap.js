import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import { StylesProvider } from '@material-ui/core';
import ReactDOM from 'react-dom';
import App from './App';



const mount = (el) => {
    ReactDOM.render(
        <App />,
        el

    )
};

if(true || process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#root');
    if(devRoot){
        mount(devRoot);
    } else{

    }
}


export { mount };