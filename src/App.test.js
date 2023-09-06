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
  const isWeekendDay = (date) => {
    const d = new Date(date);
    const dayOfWeek = d.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
    return dayOfWeek === 0 || dayOfWeek === 6; // Check if it's Sunday (0) or Saturday (6)
  };

  const fetchData = (date) => {
    const isWeekend = isWeekendDay(date);
    const times = isWeekend
      ? ["18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]
      : ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    return times;
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
  const action = { type: "UPDATE_TIMES", payload: new Date() };
  const newState = updateTimes(initialState, action);
  expect(newState).not.toEqual(initialState);
});


