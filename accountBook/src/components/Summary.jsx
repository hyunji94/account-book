import { useMemo, useState } from "react";
import "./Summary.css";
import Button from "./Button";
import CalendarCustom from "./CalendarCustom";

const Summary = ({ data }) => {
  const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = () => {
    setShowCalendar((prev) => !prev);
  };

  const totalAmount = useMemo(() => {
    return data.reduce((acc, item) => acc + item.amount, 0);
  }, [data]);

  return (
    <div className="Summary">
      <div className="summary_title">총 이용금액</div>

      <div className="summary_totalAmount">
        {totalAmount.toLocaleString()}원
      </div>

      <div className="summary_calender">
        <Button onClick={toggleCalendar} text={"달력"} />
        <div className={`calendar-wrapper ${showCalendar ? "show" : "hide"}`}>
          <CalendarCustom data={data} />
        </div>
      </div>
    </div>
  );
};

export default Summary;
