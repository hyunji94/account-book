import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // 기본 스타일
import "./CalendarCustom.css";
import moment from "moment";

const CalendarCustom = ({ data }) => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
    console.log(data);
  };

  return (
    <div>
      {/* <h3>선택한 날짜: {date.toLocaleDateString()}</h3> */}
      <Calendar
        onChange={onChange}
        value={date}
        formatDay={(locale, date) => moment(date).format("DD")}
        tileContent={({ date, view }) => {
          if (view !== "month" || !Array.isArray(data)) return null;

          const currentDate = moment(date).format("YYYY-MM-DD");

          // 같은 날짜의 모든 항목을 필터링
          const matchedItems = data.filter(
            (item) =>
              moment(item.createDate).format("YYYY-MM-DD") === currentDate
          );

          if (matchedItems.length === 0) return null;

          return (
            <div className="calendar-amount-list">
              {matchedItems.map((item) => (
                <div key={item.id} className="calendar-amount">
                  {item.amount.toLocaleString()}
                </div>
              ))}
            </div>
          );
        }}
      />
    </div>
  );
};

export default CalendarCustom;
