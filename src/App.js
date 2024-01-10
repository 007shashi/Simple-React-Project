// Import React and other required modules
import React, { useRef,useState, useEffect } from 'react';
import './index.css';
// import './Components/assets/js/main.js'
import { BrowserRouter,Link,Route, Routes } from 'react-router-dom';
import Header from './Components/header';
import Home from './Components/home';
import About from './Components/about';
import Services from './Components/services';
import Menu from './Components/menu.js';
import AppDownload from './Components/download';
import Contact from './Components/contact';
import Footer from './Components/footer';


// Functional component for the whole App
const App = () => {
  
  return (

    // =========================Multi Page Section==================

    // <BrowserRouter>
    // <div>
    //   <Header/>
    //   <Routes>
    //     <Route path='/Home' Component={Home} />
    //     <Route path='/About' Component={About} />S
    //     <Route path='/Services' Component={Services} />
    //     <Route path='/Menu' Component={Menu} />
    //     <Route path='/AppDownload' Component={AppDownload} />
    //     <Route path='/Contact' Component={Contact} />
    //   </Routes>
    //   </div>
    //  </BrowserRouter> 

    //  If you Want to Make website as Multi Page comment this <div> Section and Uncomment above section and make changes in Header.js also
      <div>
      <Header/>
      <Home/>
      <About/>
      <Services/>
      <Menu/>
      <AppDownload/>
      <Contact/>
      <Footer/>
      </div>
    
  );
};

export default App;
