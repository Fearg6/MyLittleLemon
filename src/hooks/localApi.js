/**
 * fetchData(date) - This function accepts a date as a parameter and returns an array of available reservation times for the provided date
 * submitAPI(formData) - This function accepts the booking form data as a parameter and will return true if the data was successfully submitted.
 */

const fetchData = (date) => {
  const isWeekend = isWeekendDay(date);
  const times = isWeekend
    ? ["18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]
    : ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  return times;
};

// Function to check if a given date is a weekend day (Saturday or Sunday)
const isWeekendDay = (date) => {
  const d = new Date(date);
  const dayOfWeek = d.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
  return dayOfWeek === 0 || dayOfWeek === 6; // Check if it's Sunday (0) or Saturday (6)
};

const submitAPI = (formData) => {
  return true;
};

export { fetchData, submitAPI };
