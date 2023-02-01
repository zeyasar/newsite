import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'
import About from '../pages/About'
import CategoryPage from '../pages/CategoryPage'
import SearchPage from '../pages/SearchPage'
import Header from '../components/Header';

const AppRouter = () => {
  return (
    <>
        <Router>
        <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/About" element={<About/>}/>
                    <Route path="/:category" element={<CategoryPage/>}/>
                    <Route path="/:query" element={<SearchPage/>}/>
                </Routes>
            </Router>
    </>
  )
}

export default AppRouter