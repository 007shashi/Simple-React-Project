import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

// Functional component for the Contact section
const Contact = () => {
    useEffect(() => {
        const sr = ScrollReveal({
          origin: 'top',
          distance: '30px',
          duration: 2000,
          // reset: true
        });
    
        sr.reveal('.contact__container', {
          interval: 200
        });
    
        // return () => {
        //   sr.destroy();
        // };
      }, []);
    // ... your existing JavaScript code for the contact section
  
    return (
      <section class="contact section bd-container" id="contact">
                <div class="contact__container bd-grid">
                    <div class="contact__data">
                        <span class="section-subtitle contact__initial">Let's talk</span>
                        <h2 class="section-title contact__initial">Contact us</h2>
                        <p class="contact__description">If you want to reserve a table in our restaurant, contact us and we will attend you quickly, with our 24/7 chat service.</p>
                    </div>

                    <div class="contact__button">
                        <a href="#" class="button">Contact us now</a>
                    </div>
                </div>
            </section>
    );
  };
  export default Contact;