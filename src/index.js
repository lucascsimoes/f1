import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header/Header';
import Breadcrumb from './components/Breadcrumb/Breadcrumb'

import Pilots from './views/Pilots/Pilots';
import Teams from './views/Teams/Teams';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <Header/>
      

      <Routes>
        <Route path='/pilotos' Component={Pilots}/>
        <Route path='/equipes' Component={Teams}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
