import React, { useState } from "react";
import moment from "moment";
import "./App.css";

function App() {
  const [date, setDate] = useState(moment());

  // const weekdays = moment.weekdays(); // ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const weekdaysShort = moment.weekdaysShort(); // ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const months = moment.months(); // ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']



  const firstDayOfMonth = () => moment(date).startOf("month").format("d"); // Day of week 0-6 where 0 is Sunday and 6 is Saturday
  const daysInMonth = () => moment(date).daysInMonth(); // Total number of days in the month


  const renderDays = () => {
    const blanks = [];
    for (let i = 0; i < firstDayOfMonth(); i++) {
      blanks.push(<td key={i * 100}></td>);
    }

    const daysInMonthArray = [];
    for (let d = 1; d <= daysInMonth(); d++) {
      daysInMonthArray.push(
        <td key={d}>
          <span>{d}</span>
        </td>
      );
    }

    const totalSlots = [...blanks, ...daysInMonthArray];
    const rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row); // if index not equal 7 that means not go to next week
      } else {
        rows.push(cells); // when reach next week we contain all td in last week to rows 
        cells = []; // empty container 
        cells.push(row); // in current loop we still push current row to new container
      }
      if (i === totalSlots.length - 1) { // when end loop we add remain date
        rows.push(cells);
      }
    });

    const days = rows.map((d, i) => {
      return <tr key={i}>{d}</tr>;
    });

    return days;
  };

  const prevMonth = () => {
    setDate(moment(date).subtract(1, "month"));
  };

  const nextMonth = () => {
    setDate(moment(date).add(1, "month"));
  };

  return (
    
    <div className="calendar">
      <h1>Calender</h1>
      <hr />
      <div className="calendar-header">
        <h2>{months[date.month()]}</h2>
        <div className="calendar-header-buttons">
          <button onClick={prevMonth}>Prev</button>
          <button onClick={nextMonth}>Next</button>
        </div>
      </div>
      <table className="calendar-table">
        <thead>
          <tr>
            {weekdaysShort.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>{renderDays()}</tbody>
      </table>
    </div>
  );
}

export default App;
