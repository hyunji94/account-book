import "./Content.css";
import IconItem from "./IconItem";
import Button from "./Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getStringDate } from "../util/get-string-date";

const iconList = [
  {
    iconId: 1,
    iconName: "카페",
  },
  {
    iconId: 2,
    iconName: "정기결재",
  },
  {
    iconId: 3,
    iconName: "식당",
  },
  {
    iconId: 4,
    iconName: "미용",
  },
  {
    iconId: 5,
    iconName: "병원",
  },
  {
    iconId: 6,
    iconName: "식료품",
  },
  {
    iconId: 7,
    iconName: "쇼핑",
  },
  {
    iconId: 8,
    iconName: "여행",
  },
];

//storeName, createDate, amount, iconId, payment,memo
const Content = ({ initData, onSubmit }) => {
  const [input, setInput] = useState({
    storeName: "",
    createDate: new Date(),
    amount: "",
    iconId: "",
    payment: "card",
    memo: "",
  });

  const nav = useNavigate();

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createDate: new Date(Number(initData.createDate)),
        payment: initData.payment || "card",
      });
    }
  }, [initData]);

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "createDate") {
      value = new Date(value);
    }
    setInput({
      ...input,
      [name]: value,
    });
  };

  const onClickSubmitButton = () => {
    onSubmit(input);
  };

  return (
    <div className="Content">
      <section className="name_section">
        <h4>사용처</h4>
        <input
          name="storeName"
          value={input.storeName}
          onChange={onChangeInput}
          type="text"
        />
      </section>
      <section className="date_section">
        <h4>사용 일자</h4>
        <input
          name="createDate"
          onChange={onChangeInput}
          value={getStringDate(input.createDate)}
          type="date"
        />
      </section>
      <section className="amount_section">
        <h4>사용 금액</h4>
        <input
          name="amount"
          value={input.amount}
          onChange={onChangeInput}
          type="number"
        />
      </section>
      <section className="icon_section">
        <h4>카테고리</h4>
        <div className="icon_list_wrapper">
          {iconList.map((item) => (
            <IconItem
              onClick={() =>
                onChangeInput({
                  target: {
                    name: "iconId",
                    value: item.iconId,
                  },
                })
              }
              key={item.iconId}
              {...item}
              isSelected={item.iconId === input.iconId}
            />
          ))}
        </div>
      </section>
      <section className="payment_section">
        <h4>지불방법</h4>
        <select name="payment" value={input.payment} onChange={onChangeInput}>
          <option value={"card"}>카드</option>
          <option value={"cash"}>현금</option>
        </select>
      </section>
      <section className="memo_section">
        <h4>메모</h4>
        <input
          name="memo"
          value={input.memo}
          onChange={onChangeInput}
          type="text"
          placeholder="메모를 입력해주세요."
        />
      </section>
      <section className="button_section">
        <Button onClick={() => nav(-1)} text={"취소"} />
        <Button onClick={onClickSubmitButton} text={"저장"} type={"CREATE"} />
      </section>
    </div>
  );
};

export default Content;
