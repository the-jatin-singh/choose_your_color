import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home/Home';
import Search from './pages/Search/Search';

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='search' element={<Search />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </React.Fragment>
  )
}

export default App