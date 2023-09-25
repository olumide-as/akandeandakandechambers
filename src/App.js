import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { BackTop } from 'antd';
import {  Home, NoPage} from './Pages';
import { Footer } from './Components';


const App = () => {
  return (
    <div className="App bg-gray-900 ">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/*" element={<NoPage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>

    <BackTop />

    </div>
  ) 
}

export default App 