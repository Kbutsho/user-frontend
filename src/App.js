import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Layout1 from './pages/Layout1';
import Layout2 from './pages/Layout2';
import Layout3 from './pages/Layout3';
import NotFound from './pages/NotFound';
import axios from "axios";

axios.defaults.baseURL = "https://once-inc-user.onrender.com";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/layout-1" element={<Layout1 />} />
        <Route path="/layout-2" element={<Layout2 />} />
        <Route path="/layout-3" element={<Layout3 />} />
        <Route exact path="/" element={<Layout1 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;