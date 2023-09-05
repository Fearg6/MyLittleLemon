import React, { useState } from "react";
import BookingForm from "./BookingForm";
import FullScreenSection from "./FullScreenSection";

function getTodaysDate() {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  return yyyy + "-" + mm + "-" + dd;
}

const BookingPage = ({ availableTimes, dispatch }) => {
  const [date, setDate] = useState(getTodaysDate());
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState("1");
  const [occasion, setOccasion] = useState("birthday");

  const handleSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#495457"
      py={16}
      spacing={7}
    >
      <BookingForm
        date={date}
        setDate={setDate}
        availableTimes={availableTimes}
        dispatch={dispatch}
        time={time}
        setTime={setTime}
        guests={guests}
        setGuests={setGuests}
        occasion={occasion}
        setOccasion={setOccasion}
        handleSubmit={handleSubmit}
      />
    </FullScreenSection>
  );
};

export default BookingPage;
