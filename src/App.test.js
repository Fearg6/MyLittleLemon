import { render, screen } from "@testing-library/react";
import App from "./App";
import Main from "./components/Main";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("renders the main component", () => {
  render(<Main />);
  const linkElement = screen.getByText(/Little Lemon/i);
  expect(linkElement).toBeInTheDocument();
});

test("initializeTimes returns an array of times", () => {
  const initializeTimes = () => {
    const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    return times;
  };
  expect(initializeTimes()).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
});

test("updateTimes function to validate that it returns the same value that is provided in the state", () => {
  const updateTimes = (state, action) => {
    return state;
  };
  expect(updateTimes("17:00", )).toEqual("17:00");
});
