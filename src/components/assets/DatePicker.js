import React from "react";
import DayPicker from "react-day-picker";
import "./DatePickerStyle.css";

const DatePicker = (props) => {
  // ---------------- Functions ---------------- //
  const handlePickDate = (day, modifiers = {}, { selected }) => {
    if (modifiers.disabled) {
      return;
    }
    props.setPickedDate(selected ? undefined : day);
  };

  // ---------------- Render ------------------- //
  return (
    <DayPicker
      selectedDays={props.pickedDate}
      onDayClick={handlePickDate}
      disabledDays={{ daysOfWeek: [0] }}
    />
  );
};

export default DatePicker;
