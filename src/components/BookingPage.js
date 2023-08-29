import React, { useState } from "react";
import BookingForm from "./BookingForm";
import FullScreenSection from "./FullScreenSection";

function BookingPage() {
  const [date, setDate] = useState("2023-08-29");
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
