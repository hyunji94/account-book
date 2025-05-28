import { useState, useContext } from "react";

import Button from "../components/Button";
import ExpenseList from "../components/expenseList";
import Header from "../components/Header";
import { ExpenseStateContext } from "../App";
import Summary from "../components/Summary";

const getMonthlyData = (pivotDate, data) => {
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();
  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59
  );

  return data.filter(
    (item) => beginTime <= item.createDate && item.createDate <= endTime
  );
};
const Home = () => {
  const data = useContext(ExpenseStateContext);

  const [pivotDate, setPivotDate] = useState(new Date());

  const monthlyData = getMonthlyData(pivotDate, data);

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
        rightChild={<Button text={">"} onClick={onIncreaseMonth} />}
      />
      <Summary data={monthlyData} />
      <ExpenseList data={monthlyData} />
    </div>
  );
};

export default Home;
