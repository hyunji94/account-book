import { useMemo, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // 기본 스타일
import "./CalendarCustom.css";
import moment from "moment";

const CalendarCustom = ({ data }) => {
  const [date, setDate] = useState(new Date());

  // 날짜별 합계 미리 계산
  const amountByDate = useMemo(() => {
    const map = {};
    data.forEach((item) => {
      const dateKey = moment(item.createDate).format("YYYY-MM-DD");
      if (!map[dateKey]) {
        map[dateKey] = 0;
      }
      map[dateKey] += item.amount;
    });
    return map;
  }, [data]);

  const onChange = (newDate) => {
    setDate(newDate);
    console.log(data);
  };

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={date}
        formatDay={(locale, date) => moment(date).format("DD")}
        tileContent={({ date, view }) => {
          if (view !== "month") return null;

          const dateKey = moment(date).format("YYYY-MM-DD");
          const amount = amountByDate[dateKey];

          return amount ? (
            <div className="calendar-amount">{amount.toLocaleString()}</div>
          ) : null;
        }}
      />
    </div>
  );
};

export default CalendarCustom;
