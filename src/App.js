import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './components/HomeView';
import Navbar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/*">
          <Route index element={<HomeView />} />
          {/* <Route path="pathB" element={<ComponentB />} />
          <Route path="pathC" element={<ComponentC />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;