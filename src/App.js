import React from "react";
import Calendar from "./components/Calendar/Calendar";
import "./index.css";

function App() {
  return (
    <div className="calendar-wrapper">
      <Calendar date={new Date(2022, 9, 3)} />
    </div>
  );
}

export default App;
