import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';


// ============================Nav Toggle=============================
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navLinkRef = useRef([]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const linkAction = () => {
    // When we click on each nav__link, we remove the show-menu class
    navLinkRef.current.forEach((n) => n.classList.remove('show-menu'));
  };

  useEffect(() => {
    // Add the click event listener when the component mounts
    navLinkRef.current.forEach((n) => n.addEventListener('click', linkAction));

    // Cleanup the event listeners when the component unmounts
    return () => {
      navLinkRef.current.forEach((n) => n.removeEventListener('click', linkAction));
    };
  }, []);


//   ===============================Dark Theme==========================
    const [darkTheme, setDarkTheme] = useState(false);
  
    const themeButtonHandler = () => {
      // Toggle the theme
      setDarkTheme((prevTheme) => !prevTheme);
    };
  
    useEffect(() => {
      // Check for the user's theme preference in local storage
      const storedTheme = localStorage.getItem('selected-theme');
  
      // Set the theme based on the user's preference or default to light theme
      if (storedTheme) {
        setDarkTheme(storedTheme === 'dark');
      }
    }, []);
  
    useEffect(() => {
      // Update the document body class based on the theme state
      document.body.classList.toggle('dark-theme', darkTheme);
  
      // Save the theme preference to local storage
      localStorage.setItem('selected-theme', darkTheme ? 'dark' : 'light');
    }, [darkTheme]);

  return (
    <header className="l-header" id="header">
      <nav className="nav bd-container">
        <a href="#" className="nav__logo">
          Tasty
        </a>
        <div
          className={`nav__menu ${showMenu ? 'show-menu' : ''}`}
          id="nav-menu"
          ref={(el) => (navLinkRef.current = [el])}  /* Wrap the element in an array */
        >
          <ul className="nav__list">
            {/* ============================= To use Multiple Page Uncomment this section and Comment below li Section */}
           
           
            {/* <li className="nav__item"><Link to="/home" className="nav__link active-link">Home</Link></li>
            <li className="nav__item"><Link to="/about" className="nav__link">About</Link></li>
            <li className="nav__item"><Link to="/services" className="nav__link">Services</Link></li>
            <li className="nav__item"><Link to="/menu" className="nav__link">Menu</Link></li>
            <li className="nav__item"><Link to="/contact" className="nav__link">Contact us</Link></li>
            <li><i className="bx bx-moon change-theme {darkTheme ? 'bx bx-moon' : 'bx bx-sun'}" id="theme-button" onClick={themeButtonHandler}></i></li> */}

            {/* ================================ Single Page List ===================================== */}

            <li class="nav__item"><a href="#home" class="nav__link active-link">Home</a></li>
            <li class="nav__item"><a href="#about" class="nav__link">About</a></li>
            <li class="nav__item"><a href="#services" class="nav__link">Services</a></li>
            <li class="nav__item"><a href="#menu" class="nav__link">Menu</a></li>
            <li class="nav__item"><a href="#contact" class="nav__link">Contact us</a></li>
            <li><i className="bx bx-moon change-theme {darkTheme ? 'bx bx-moon' : 'bx bx-sun'}" id="theme-button" onClick={themeButtonHandler}></i></li>
         
          </ul>
        </div>
        <div className="nav__toggle" onClick={toggleMenu} id="nav-toggle">
          <i className="bx bx-menu"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
