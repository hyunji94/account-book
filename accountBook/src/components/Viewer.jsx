import "./Viewer.css";
import { getStringtime } from "../util/get-string-time";
import { ExpenseStateContext } from "../App";
import { useState, useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { useParams } from "react-router-dom";

const Viewer = ({ storeName, createDate, amount, payment, memo }) => {
  const data = useContext(ExpenseStateContext);
  const params = useParams();
  //3개월전 날짜 계산
  const date = new Date(createDate);
  const threeMonthsAgo = date.getMonth() - 2;

  const filteredList = data.filter((item) => {
    const itemMonth = new Date(item.createDate).getMonth();
    return (
      item.id != params.id &&
      item.storeName === storeName &&
      itemMonth >= threeMonthsAgo
    );
  });

  return (
    <div className="Viewer">
      <section className="content_section">
        <div>
          <h2>이용처</h2>
          <p>{storeName}</p>
        </div>
        <div className="amount">
          <h2>이용금액</h2>
          <p>{amount.toLocaleString()}원</p>
        </div>
        <div className="date">
          <h2>이용일자</h2>
          <p>{getStringtime(new Date(createDate))}</p>
        </div>
        <div>
          <h2>지불방법</h2>
          <p>{payment}</p>
        </div>
        <div>
          <h2>메모</h2>
          <p>{memo.length != 0 ? memo : "-"}</p>
        </div>
      </section>
      <section className="sub_section">
        <div className="list_wrapper">
          <h2>최근 3개월간 이용처 거래내역</h2>
          {filteredList.length > 0 ? (
            filteredList.map((item) => <ExpenseItem key={item.id} {...item} />)
          ) : (
            <p>거래내역이 없습니다.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Viewer;
