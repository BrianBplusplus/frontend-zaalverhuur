import React, { useState } from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

const DatePicker = () => {
  // ---------------- Variables ---------------- //
  const [pickedDate, setPickedDate] = useState(null);

  // ---------------- Functions ---------------- //
  const handlePickDate = (day, modifiers = {}, { selected }) => {
    if (modifiers.disabled) {
      return;
    }
    setPickedDate(selected ? undefined : day);
    console.log("pickedDate: ", pickedDate);
  };

  // ---------------- Render ------------------- //
  return (
    <DayPicker
      selectedDays={pickedDate}
      onDayClick={handlePickDate}
      disabledDays={{ daysOfWeek: [0] }}
    />
  );
};

export default DatePicker;
