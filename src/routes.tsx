import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductViewPage from './pages/ProductViewPage';
import ProductsPage from './pages/ProductsPage';
import ScrollToTop from './components/ScrollToTop';

export const AppRountes = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/product-listing' element={<ProductListingPage />} />
        <Route path='/product-view/:id' element={<ProductViewPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='*' element={<Navigate to='/home' />} />
      </Routes>
    </BrowserRouter>
  );
};
