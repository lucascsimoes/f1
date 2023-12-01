import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './views/Home/Home';
import GlobalStyle from './GlobalStyle';

import "./index.css"

import Header from './components/Header/Header';
import Driver from './views/Driver/Principal/Driver';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
      <GlobalStyle/>

      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/drivers" Component={Driver}/>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  
);

reportWebVitals();
