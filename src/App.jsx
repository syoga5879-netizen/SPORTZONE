import { useState } from 'react'
import './index.css'
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/frontpages/Dashboard';
import ProductDetail from './pages/frontpages/ProductDetail';
import { Route, Routes } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/adminpages/AdminDashboard';
import AboutPage from './pages/adminpages/AboutPage';
import Cart from './pages/frontpages/Cart';

function App() { 
  return ( 
    
    
    <Routes>
      <Route path="/" element={<MainLayout/>} >
        <Route index element={<Dashboard />} /> 
        <Route path="product/:id" element={<ProductDetail/>} />
        <Route path="/cart" element={<Cart/>} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}> 
       
        <Route path="dashboard" element={<AdminDashboard />} /> 
        <Route path="about" element={<AboutPage />} /> 
      </Route> 
    </Routes>

  ); 
}

export default App