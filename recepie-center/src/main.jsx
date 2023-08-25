import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LandingPage from './LandingPage.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './Footer';
import SearchPage from './SearchPage';
import RecipePage from './RecipePage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index={true} path="/" element={<LandingPage />} />
        <Route path="/search" element={<SearchPage />} />
        
        <Route path="/search/Ensalada%20Murciana" element={<RecipePage name='Ensalada Murciana' 
                            image='https://www.pequerecetas.com/wp-content/uploads/2022/07/ensalada-murciana-moje-mojete-murciano.jpg' 
                            ingredients='2 eggs, 2 potatoes, 1 onion, 5 olives, 1 tomato' 
                            calories='350'/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
