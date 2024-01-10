import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import movilapp from './assets/img/movilapp.png';
import app1 from './assets/img/app1.png';

// Functional component for the App
const AppDownload = () => {
    useEffect(() => {
        const sr = ScrollReveal({
          origin: 'top',
          distance: '30px',
          duration: 2000,
          reset: true
        });
    
        sr.reveal('.app__container', {
          interval: 200
        });
    
        return () => {
          sr.destroy();
        };
      }, []);
    // ... your existing JavaScript code for the App
  
    return (
      <section class="app section bd-container">
                <div class="app__container bd-grid">
                    <div class="app__data">
                        <span class="section-subtitle app__initial">App</span>
                        <h2 class="section-title app__initial">App is available</h2>
                        <p class="app__description">Find our application and download it, you can make reservations, food orders, see your deliveries on the way and much more.</p>
                        <div class="app__stores">
                            <a href="#"><img src={app1} alt="" class="app__store"/></a>
                            {/* <a href="#"><img src={} alt="" class="app__store"/></a> */}
                        </div>
                    </div>

                    <img src={movilapp} alt="" class="app__img"/>
                </div>
            </section>
    );
  };
  export default AppDownload;