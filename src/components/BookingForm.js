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
  time,
  setTime,
  guests,
  setGuests,
  occasion,
  setOccasion,
  handleSubmit,
}) => {
  const availableTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = {
      date,
      time,
      guests,
      occasion,
    };
    handleSubmit(formData);
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
                onChange={(e) => setDate(e.target.value)}
                value={date}
              />
              <FormLabel htmlFor="res-time">Choose time</FormLabel>
              <Select
                id="res-time"
                name="time"
                onChange={(e) => setTime(e.target.value)}
                value={time}
              >
                {availableTimes.map((availableTime) => (
                  <option key={availableTime} value={availableTime}>
                    {availableTime}
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
