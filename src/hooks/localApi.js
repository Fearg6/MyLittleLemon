/**
 * fetchData(date) - This function accepts a date as a parameter and returns an array of available reservation times for the provided date
 * submitAPI(formData) - This function accepts the booking form data as a parameter and will return true if the data was successfully submitted.
 */

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

const submitAPI = (formData, availableTimes, dispatch, navigate) => {
  availableTimes = availableTimes.filter((time) => time !== formData.time);
  // PUT request get array of data.availableTimes for formData.date and remove formData.time from array
  fetch(
    `https://64fa0ad64098a7f2fc1551b0.mockapi.io/BookingTimes/${formData.date}`,
    {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ availableTimes: availableTimes }),
    }
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      // handle error
      throw new Error("Request failed!");
    })
    .then((task) => {
      // Do something with updated task
      task = task.availableTimes;
      console.log("task: ", task);
    })
    .catch((error) => {
      // handle error
    });

  dispatch({ type: "UPDATE_TIMES", payload: availableTimes });
  navigate.push("/confirmed-booking.html");
};
export { fetchData, submitAPI };
