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

function BookingPage() {
  const [date, setDate] = useState(getTodaysDate());
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState("1");
  const [occasion, setOccasion] = useState("birthday");
  const availableTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

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
}

export default BookingPage;
