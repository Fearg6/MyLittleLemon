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

test("initializeTimes returns an array of times", () => {
  const times = Main.initializeTimes();
  expect(times).toHaveLength(5);
});
test("updateTimes returns an array of times", () => {
  const times = Main.updateTimes();
  console.log("times: ",times);
  expect(times).toHaveLength(5);
});

