import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LandingPage from './LandingPage.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './Footer';
import SearchPage from './SearchPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index={true} path="/" element={<LandingPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
