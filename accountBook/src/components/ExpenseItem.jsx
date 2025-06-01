import "./ExpenseItem.css";
import { getIconImage } from "../util/get-icon-image";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const ExpenseItem = ({ id, storeName, createDate, amount, iconId }) => {
  const nav = useNavigate();

  return (
    <div className="ExpenseItem">
      <div
        onClick={() => nav(`/detail/${id}`)}
        className={`img_section img_section_${iconId}`}
      >
        <img src={getIconImage(iconId)} />
      </div>
      <div onClick={() => nav(`/detail/${id}`)} className="info_section">
        <div className="storename">{storeName}</div>
        <div className="date">{new Date(createDate).toLocaleDateString()}</div>
      </div>
      <div className="right_section">
        <div className="amount_section">
          <div className="amount">{amount.toLocaleString()}원</div>
        </div>
        <div className="button_section">
          <Button onClick={() => nav(`/edit/${id}`)} text={"수정하기"} />
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
