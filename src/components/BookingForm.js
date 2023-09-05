import React from "react";
import {
  Box,
  Button,
  FormLabel,
  Heading,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";

const BookingForm = ({
  date,
  setDate,
  availableTimes,
  dispatch,
  time,
  setTime,
  guests,
  setGuests,
  occasion,
  setOccasion,
  submitForm,
}) => {
  // var timesArray = availableTimes();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = {
      date,
      time,
      guests,
      occasion,
    };
    submitForm(formData);
  };

  return (
    <VStack w="1024px" p={32}>
      <Heading as="h1" id="booking-form">
        Booking Form
      </Heading>
      <Box p={6} rounded="md">
        <form onSubmit={handleFormSubmit}>
          <VStack spacing={2}>
            <FormLabel htmlFor="date">Date</FormLabel>
            <Input
              id="date"
              name="date"
              type="date"
              onChange={(e) => {
                setDate(e.target.value);
                dispatch({ type: "UPDATE_TIMES", payload: e.target.value });
              }}
              value={date}
            />
            <FormLabel htmlFor="res-time">Choose time</FormLabel>
            <Select
              id="res-time"
              name="time"
              onChange={(e) => setTime(e.target.value)}
              value={time}
            >
              {availableTimes.map((timesArray) => (
                <option key={timesArray} value={timesArray}>
                  {timesArray}
                </option>
              ))}
            </Select>
            <FormLabel htmlFor="guests">Number of guests</FormLabel>
            <Input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              onChange={(e) => setGuests(e.target.value)}
              value={guests}
            />
            <FormLabel htmlFor="occasion">Occasion</FormLabel>
            <Select
              id="occasion"
              name="occasion"
              onChange={(e) => setOccasion(e.target.value)}
              value={occasion}
            >
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
            </Select>
            <Button mt={4} type="submit">
              Submit
            </Button>
          </VStack>
        </form>
      </Box>
    </VStack>
  );
};

export default BookingForm;
