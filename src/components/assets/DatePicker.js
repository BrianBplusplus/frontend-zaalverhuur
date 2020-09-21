import React from "react";
import DayPicker from "react-day-picker";
import "./DatePickerStyle.css";

const DatePicker = ({ state, setState }) => {
  // ---------------- Variables ---------------- //
  const today = new Date();

  // ---------------- Functions ---------------- //
  const handlePickDate = (day, { selected }) => {
    setState({
      ...state,
      pickedDate: selected ? undefined : day,
    });
  };

  // ---------------- Render ------------------- //
  return (
    <DayPicker
      selectedDays={state.pickedDate}
      onDayClick={handlePickDate}
      disabledDays={{ before: today, daysOfWeek: [0, 6] }}
    />
  );
};

export default DatePicker;
