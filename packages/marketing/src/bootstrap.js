import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import { StylesProvider } from '@material-ui/core';
import ReactDOM from 'react-dom';
import App from './App';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const mount = (el) => {
    ReactDOM.render(
        <App />,
        el);
};

if(true || process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_marketing-dev-root');
    if(devRoot){
        mount(devRoot);
    } else{

    }
}


export { mount };