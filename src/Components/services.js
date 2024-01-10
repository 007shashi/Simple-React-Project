import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Services = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '30px',
      duration: 2000,
      reset: true
    });

    sr.reveal('.services__container', {
      interval: 200
    });

    return () => {
      sr.destroy();
    };
  }, []);
    // ... your existing JavaScript code for the App
  
    return (
      <section class="services section bd-container" id="services">
        <span class="section-subtitle">Offering</span>
                <h2 class="section-title">Our amazing services</h2>

                <div class="services__container  bd-grid">
                    <div class="services__content">
                        <h3 class="services__title">Excellent food</h3>
                        <p class="services__description">We offer our clients excellent quality services for many years, with the best and delicious food in the city.</p>
                    </div>

                    <div class="services__content">
                            <defs>
                            <clipPath id="clip0">
                            <rect width="64" height="64" fill="white"/>
                            </clipPath>
                            </defs>
                        <h3 class="services__title">Fast food</h3>
                        <p class="services__description">We offer our clients excellent quality services for many years, with the best and delicious food in the city.</p>
                    </div>

                    <div class="services__content">
                                <defs>
                                <clipPath id="clip0">
                                <rect width="64" height="64" fill="white"/>
                                </clipPath>
                                </defs>
                        <h3 class="services__title">Delivery</h3>
                        <p class="services__description">We offer our clients excellent quality services for many years, with the best and delicious food in the city.</p>
                    </div>
                </div>
      </section>
    );
  };
  export default Services;