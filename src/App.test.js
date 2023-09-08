import { render, screen } from "@testing-library/react";
import App from "./App";
import Main from "./components/Main";

// Step 1: Update the test for initializeTimes
// Now that the initializeTimes function calls the fetchAPI function, the unit tests need to be updated. In fact, if you run the tests now, you will discover that the existing test is failing. For testing purposes, the fetchAPI function will return a non-empty array of available booking times.

// Step 2: Update the test for updateTimes
// Similar to the previous step, the test you previously created for updateTimes will fail. You will need to update the test to include a pre-selected date as part of the dispatch data.

// Step 3: Run the tests
// Run all unit tests and verify that they are succeeding.

test("renders the main component", () => {
  render(<Main />);
  const linkElement = screen.getByText(/Little Lemon/i);
  expect(linkElement).toBeInTheDocument();
});

test("updateTimes returns state when action type is not UPDATE_TIMES", () => {
  const updateTimes = (state, action) => {
    switch (action.type) {
      case "UPDATE_TIMES":
        return Main.prototype.fetchData(action.payload);
      default:
        return state;
    }
  };

  const initialState = ["10:00", "11:00", "12:00"];
  const action = { type: "SOME_OTHER_ACTION" };
  const newState = updateTimes(initialState, action);
  expect(newState).toEqual(initialState);
});

test("updateTimes returns new state when action type is UPDATE_TIMES", () => {
  const fetchData = (date, dispatch, text) => {
    fetch(`https://64fa0ad64098a7f2fc1551b0.mockapi.io/BookingTimes/${date}`, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(text + " Fetch data: ", data);
        //Returns availableTimes array
        const availableTimes = data.availableTimes;
        console.log(text + " Fetch available Times: ", availableTimes);
        dispatch({ type: "UPDATE_TIMES", payload: availableTimes });

        return availableTimes;
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  const updateTimes = (state, action) => {
    switch (action.type) {
      case "UPDATE_TIMES":
        return fetchData(action.payload);
      default:
        return state;
    }
  };

  const initialState = ["10:00", "11:00", "12:00"];
  const action = { type: "UPDATE_TIMES", payload: "2021-01-01" };
  const newState = updateTimes(initialState, action);
  expect(newState).not.toEqual(initialState);
});

test("initializeTimes returns empty array", () => {
  const initializeTimes = () => {
    return [];
  };

  const newState = initializeTimes();
  expect(newState).toEqual([]);
} );

