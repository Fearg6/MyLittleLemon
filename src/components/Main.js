import React, { useReducer } from "react";
import greekSalad from "../images/greek_salad.jpg";
import bruchetta from "../images/bruchetta.jpg";
import lemonDessert from "../images/lemon_desert.jpg";
import restaurantFood from "../images/restaurant_food.jpg";
import BookingPage from "./BookingPage";
import {fetchData , submitAPI} from "../hooks/localApi";
import { useHistory } from "react-router-dom";

function Main() {

  const navigate = useHistory();

  const updateTimes = (state, action) => {
    switch (action.type) {
      case "UPDATE_TIMES":
        return fetchData(action.payload);
      default:
        return state;
    }
  };

  const initializeTimes = () => {
    const today = new Date();
    const times = fetchData(today);
    return times;
  };

  const submitForm = (formData) => {
    console.log("Date: ",formData.date);
    const response = submitAPI(formData.date);
    if(response){
      navigate.push("/confirmed-booking.html");
    }
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  return (
    <main>
      <section>
        <article className="promotion">
          <div className="content">
            <h1>
              <span>Little Lemon</span>
            </h1>
            <h2>
              <span>Chicago</span>
            </h2>
            <p>
              <span>
                <b>Chicago’s</b> best restaurant for authentic Greek cuisine.
              </span>
            </p>
            <a href="/reservations.html">
              <button>Reserve a Table</button>
            </a>
          </div>
          <img
            src={restaurantFood}
            alt="Lemon Dessert"
            className="food-image"
          />
        </article>
      </section>
      <section className="specials-section">
        <h2>This Week's Specials!</h2>
        <a href="/online-menu.html" className="online-menu-button">
          <button>Online Menu</button>
        </a>
      </section>
      <section className="menu-items">
        <article>
          <img src={greekSalad} alt="Greek Salad" />
          <h2>Greek Salad</h2>
          <p>
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
          </p>
          <p>
            <a href="/online-order.html">
              <b>Order a delivery</b>
            </a>
          </p>
        </article>
        <article>
          <img src={bruchetta} alt="Bruchetta" />
          <h2>Bruchetta</h2>
          <p>
            Our Bruschetta is made from grilled bread that has been smeared with
            garlic and seasoned with salt and olive oil.
          </p>
          <p>
            <a href="/online-order.html">
              <b>Order a delivery</b>
            </a>
          </p>
        </article>
        <article>
          <img src={lemonDessert} alt="Lemon Dessert" />
          <h2>Lemon Dessert</h2>
          <p>
            This comes straight from grandma’s recipe book, every last
            ingredient has been sourced and is as authentic as can be imagined.
          </p>
          <p>
            <a href="/online-order.html">
              <b>Order a delivery</b>
            </a>
          </p>
        </article>
      </section>
      <BookingPage
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </main>
  );
}

export default Main;
