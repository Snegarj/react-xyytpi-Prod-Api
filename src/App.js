import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './Product';
import Category from './category';

const App = () => (
  <Router>
    <div id="APP">
      <Routes>
        <Route exact path="/" element={<Product />} />
        <Route path="/product/:id" element={<Category />} />
      </Routes>
    </div>
  </Router>
);

export default App;
