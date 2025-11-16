import React from "react";
import { getMonthMatrix } from "./calendarUtils";

export default function Calendar({ date }) {
  const d = new Date(date); 
  const monthName = d.toLocaleString("default", { month: "long" });
  const year = d.getFullYear();
  const selected = d.getDate();
  const matrix = getMonthMatrix(d);

  const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  return (
    <div className="calendar">
      <div className="calendar-header">
        {monthName} {year}
      </div>

      <div className="calendar-weekdays">
        {weekdays.map((w) => (
          <div className="calendar-cell" key={w}>
            {w}
          </div>
        ))}
      </div>

      <div className="calendar-dates">
        {matrix.flat().map((value, i) => {
          const isSelected = value === selected;
          return (
            <div
              key={i}
              className={`calendar-cell ${
                isSelected ? "calendar-selected" : ""
              }`}
            >
              {value ?? ""}
            </div>
          );
        })}
      </div>
    </div>
  );
}
