import React from "react";
import DayPicker from "react-day-picker";
import { Redirect } from "react-router";
import "./DatePickerStyle.css";

const DatePicker = ({ state, setState }) => {
  // ---------------- Variables ---------------- //
  const today = new Date();
  const { validatorDate } = state

  // ---------------- Functions ---------------- //
  const handlePickDate = (day, { selected }) => {
    setState({
      ...state,
      pickedDate: selected ? undefined : day,
      validatorDate: true,
    });
  };

  const spanStyle = {
    color: "red",
    display: validatorDate === false ? "block" : "none"
  }

  // ---------------- Render ------------------- //
  return (
    <div>
    <DayPicker
      selectedDays={state.pickedDate}
      onDayClick={handlePickDate}
      disabledDays={{ before: today, daysOfWeek: [0, 6] }}
    />
    <span style={spanStyle}>Kies een datum</span>
    </div>
  );
};

export default DatePicker;
