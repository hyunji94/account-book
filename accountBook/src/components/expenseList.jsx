import "./ExpenseList.css";
import Button from "./Button";
import ExpenseItem from "./ExpenseItem";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ExpenseList = ({ data }) => {
  const nav = useNavigate();
  const [sortType, setSortType] = useState("latest");

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  const getSortedData = () => {
    return data.toSorted((a, b) => {
      if (sortType === "latest") {
        return Number(b.createDate) - Number(a.createDate);
      } else if (sortType === "oldest") {
        return Number(a.createDate) - Number(b.createDate);
      } else if (sortType === "highest") {
        return Number(b.amount) - Number(a.amount);
      } else {
        console.log(Number(a.amount) - Number(b.amount));
        return Number(a.amount) - Number(b.amount);
      }
    });
  };

  const sortedData = getSortedData();

  return (
    <div className="ExpenseList">
      <div className="menu_bar">
        <select onChange={onChangeSortType}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>과거순</option>
          <option value={"highest"}>높은 금액순</option>
          <option value={"lowest"}>낮은 금액순</option>
        </select>
        <Button
          onClick={() => nav("/new")}
          text={"지출 내역 추가"}
          type={"CREATE"}
        />
      </div>
      <div className="summary">
        <div>총 이용금액</div>
        <div className="totalAmount"></div>
      </div>
      <div className="list_wrapper">
        {sortedData.map((item) => (
          <ExpenseItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;
