import React, { useEffect } from "react";
import { fetchData } from "../hooks/localApi";
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
  maxDate,
  minDate,
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
  useEffect(() => {
    fetchData(date, dispatch, "onLoad");
  }, [date, dispatch]);

  useEffect(() => {
    setTime(availableTimes[0]);
  }, [availableTimes, setTime]);

  return (
    <VStack w="1024px" p={32}>
      <Heading as="h1" id="booking-form">
        Booking Form
      </Heading>
      <Box p={6} rounded="md">
        <form aria-label="Booking Form" onSubmit={handleFormSubmit}>
          <VStack spacing={2}>
            <FormLabel htmlFor="date">Date</FormLabel>
            <Input
              aria-label="Date"
              id="date"
              name="date"
              type="date"
              min={minDate}
              max={maxDate}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              value={date}
            />
            <FormLabel htmlFor="res-time">Choose time</FormLabel>
            <Select
              aria-label="Choose time"
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
              aria-label="Number of guests"
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
              aria-label="Occasion"
              id="occasion"
              name="occasion"
              onChange={(e) => setOccasion(e.target.value)}
              value={occasion}
            >
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
            </Select>
            <Button aria-label="On Click" mt={4} type="submit">
              Submit
            </Button>
          </VStack>
        </form>
      </Box>
    </VStack>
  );
};

export default BookingForm;
