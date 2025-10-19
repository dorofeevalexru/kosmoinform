import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout/Layout';
import Home from './pages/Home/Home';
import Project from './pages/Project/Project';
import Login from './pages/Login/Login';
import Map from './pages/Map/Map';
import './styles/globals.css';


const DebugRoutes = () => {
  console.log('App.js загружен');
  console.log('Map компонент:', Map);
  return null;
};

function App() {
  return (
    <Router>
      <DebugRoutes />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/login" element={<Login />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;