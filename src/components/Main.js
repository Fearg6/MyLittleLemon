import React from "react";
import ourProducts from '../images/our_products.jpg';
import aboutUs from '../images/about_us.jpg';
import contactUs from '../images/contact_us.jpg';

function Main() {
  return (
    <main>
      <section>
        <article class="promotion">
          <h1>
            <span>Welcome to Little Lemon</span>
          </h1>
          <h2>
            <span>20% off this weekend</span>
          </h2>
          <p>
            <span>
              Discount applied at checkout. Valid for online orders only. Offer ends 11:59pm on 11/11/2023.
            </span>
          </p>
        </article>
      </section>
      <section>
        <article>
          <h2>About Us</h2>
          <img src={aboutUs} alt="About Us" />
          <p>
            At Little Lemon Restaurant, we are more than just a dining
            establishment – we are a culinary haven where passion for flavor
            meets creativity. Our story is one of a shared love for food and an
            unwavering commitment to creating exceptional dining experiences.
          </p>
          <p>
            With a humble beginning rooted in a zestful idea, we've grown into a
            beloved culinary destination that celebrates the magic of combining
            diverse ingredients with a lemony twist. Our dedicated team of chefs
            and staff pour their heart into every dish, crafting a menu that
            reflects our devotion to both taste and ambiance.
          </p>
        </article>
        <article>
          <h2>Our Products</h2>
          <img src={ourProducts} alt="Our Products" />
          <p>
            Prepare to embark on a culinary journey like no other as you explore
            the vibrant tapestry of flavors that define our menu at Little Lemon
            Restaurant. Our commitment to culinary innovation and quality shines
            through in every dish we present.
          </p>
          <p>
            From zesty appetizers that awaken your senses to main courses that
            are a harmonious blend of tradition and modernity, our offerings
            cater to diverse palates and preferences. With a lemon-infused twist
            in every dish, you'll experience a symphony of tastes that lingers
            on your palate long after you've finished your meal.
          </p>
        </article>
        <article>
          <h2>Contact Us</h2>
          <img src={contactUs} alt="Contact Us" />
          <p>
            Your journey to a zestful dining experience begins with a simple
            reach-out. Have questions, reservations, or special requests? Our
            friendly and attentive staff is here to assist you every step of the
            way.
          </p>
          <p>
            Contact Little Lemon Restaurant to turn your culinary aspirations
            into a reality. Whether you're planning an intimate dinner for two
            or a celebratory event with a touch of lemony elegance, we're here
            to make your vision come to life.
          </p>
        </article>
      </section>
    </main>
  );
}

export default Main;
