import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./components/pages/About/About";
import ErrorPage from './components/pages/404/ErrorPage';
import Book from './components/pages/book/Book';
import Home from "./components/pages/home/Home";
import SubsThanks from "./components/pages/thanks/SubsThanks";
import Footer from "./components/shared/footer/Footer";
import Blog from "./components/pages/Blog/Blog";





function App() {


  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='book' element={<Book />} />
        <Route path='*' element= {<ErrorPage />}  />
        <Route path='about' element= {<About/>} />
        <Route path='thanks-subs' element={<SubsThanks />} />
        

      </Routes>
      <Blog/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
