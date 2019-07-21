import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import {BrowserRouter,Route} from 'react-router-dom';
import App from './pages/App';


ReactDOM.render (
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>, document.getElementById ('root'));
