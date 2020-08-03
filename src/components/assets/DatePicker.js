import React, { useState } from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

const DatePicker = () => {
  const [pickedDate, setPickedDate] = useState(null);

  const handlePickDate = (day, modifiers = {}, { selected }) => {
    if (modifiers.disabled) {
      return;
    }
    setPickedDate(selected ? undefined : day);
    console.log("pickedDate: ", pickedDate);
  };

  return (
    <DayPicker
      selectedDays={pickedDate}
      onDayClick={handlePickDate}
      disabledDays={{ daysOfWeek: [0] }}
    />
  );
};

export default DatePicker;
