import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import aboutPng from './assets/img/about.jpg';
// Functional component for the About section
const About = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '30px',
      duration: 1000,
      reset: true
    });

    sr.reveal('.about__data, .about__description, .button, .about__img', {
      interval: 200
    });

    return () => {
      sr.destroy();
    };
  }, []);
    // ... your existing JavaScript code for the about section
  
    return (
      <section className="about section bd-container" id="about">
          <div class="about__container  bd-grid">
          <div class="about__data">
              <span class="section-subtitle about__initial">About us</span>
              <h2 class="section-title about__initial">We cook the best <br/> tasty food</h2>
              <p class="about__description">We cook the best food in the entire city, with excellent customer service, the best meals and at the best price, visit us.</p>
              <a href="#" class="button">Explore history</a>
          </div>
          <img src={aboutPng} alt="" class="about__img"/>
      </div>
      </section>
    );
  };
  export default About;