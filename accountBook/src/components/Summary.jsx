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
      <Button onClick={toggleCalendar} text={"달력으로 보기"} />
      {/* 조건부 렌더링으로 달력 표시 */}
      {showCalendar && <CalendarCustom data={data} />}
    </div>
  );
};

export default Summary;
