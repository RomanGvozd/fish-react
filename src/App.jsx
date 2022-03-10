import React from 'react';
import {BrowserRouter } from "react-router-dom";

import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Basked from './components/Basked/Basked';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Content />
      <Basked />
    </BrowserRouter>
  );
}

export default App;
