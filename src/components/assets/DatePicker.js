import React from "react";
import DayPicker from "react-day-picker";
import "./DatePickerStyle.css";

const DatePicker = ({ state, setState }) => {
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
      disabledDays={{ daysOfWeek: [0] }}
    />
  );
};

export default DatePicker;
