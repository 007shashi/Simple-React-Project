import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import plate1 from './assets/img/plate1.png';
import plate2 from './assets/img/plate2.png';
import plate3 from './assets/img/plate3.png';

// Functional component for the Header
const Menu = () => {  
    useEffect(() => {
        const sr = ScrollReveal({
          origin: 'top',
          distance: '30px',
          duration: 2000,
          reset: true
        });
    
        sr.reveal('.menu__container', {
          interval: 200
        });
    
        return () => {
          sr.destroy();
        };
      }, []);

    return (
        <section class="menu section bd-container" id="menu">
        <span class="section-subtitle">Special</span>
        <h2 class="section-title">Menu of the week</h2>

        <div class="menu__container bd-grid">
            <div class="menu__content">
                <img src={plate1} alt="" class="menu__img"/>
                <h3 class="menu__name">Barbecue salad</h3>
                <span class="menu__detail">Delicious dish</span>
                <span class="menu__preci">220.00</span>
                <a href="#" class="button menu__button"><i class='bx bx-cart-alt'></i></a>
            </div>

            <div class="menu__content">
                <img src={plate2} alt="" class="menu__img"/>
                <h3 class="menu__name">Salad with fish</h3>
                <span class="menu__detail">Delicious dish</span>
                <span class="menu__preci">1200.00</span>
                <a href="#" class="button menu__button"><i class='bx bx-cart-alt'></i></a>
            </div>
            
            <div class="menu__content">
                <img src={plate3} alt="" class="menu__img"/>
                <h3 class="menu__name">Spinach salad</h3>
                <span class="menu__detail">Delicious dish</span>
                <span class="menu__preci">90.50</span>
                <a href="#" class="button menu__button"><i class='bx bx-cart-alt'></i></a>
            </div>
        </div>
    </section>
    );
  };
  export default Menu;