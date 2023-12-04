import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyle from './GlobalStyle';
import "./index.css"

import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';

const Home = lazy(() => import("./views/Home/Home"))
const Driver = lazy(() => import("./views/Driver/Principal/Driver"))

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
      <GlobalStyle/>

      <BrowserRouter>
        <Suspense fallback={<Loading/>}>
          <Header/>
          <Routes>
            <Route path="/" Component={Home}/>
            {/* <Route path="/drivers" Component={Driver}/> */}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </React.StrictMode>
  
);

reportWebVitals();
