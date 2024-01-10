import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import HomePng from './assets/img/home.png';

const Home = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '30px',
      duration: 2000,
      reset: true
    });

    sr.reveal('.home__container', {
      interval: 200
    });

    return () => {
      sr.destroy();
    };
  }, []);


    // ... your existing JavaScript code for the home section
  
    return (
      <section className="home" id="home">
        <div class="home__container bd-container bd-grid">
        <div class="home__data">
            <h1 class="home__title">Tasty food</h1>
            <h2 class="home__subtitle">Try the best food of <br/> the week.</h2>
            <a href="#menu" class="button">View Menu</a>
        </div>
        <img src={HomePng} alt="Home_png" class="home__img"/>
    </div>
      </section>
    );
  };
  export default Home;