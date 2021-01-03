import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from '../router';
import routeList from '../router/router-config';
//import '../global.less';
ReactDom.hydrate(<BrowserRouter><App routeList={routeList} /></BrowserRouter>, document.getElementById('root'))