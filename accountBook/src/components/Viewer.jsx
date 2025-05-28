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
          <h2>{storeName}</h2>
        </div>
        <div className="amount">
          <p>이용금액</p>
          <p>{amount.toLocaleString()}원</p>
        </div>
        <div className="date">
          <p>거래일</p>
          <p>{getStringtime(new Date(createDate))}</p>
        </div>
        <div>
          <p>지불방법</p>
          <p>{payment}</p>
        </div>
        <div>
          <p>메모</p>
          <p>{memo}</p>
        </div>
      </section>
      <section className="sub_section">
        <div className="list_wrapper">
          <p>최근 3개월간 이용처 거래내역</p>
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
