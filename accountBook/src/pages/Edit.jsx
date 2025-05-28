import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import Content from "../components/Content";
import Header from "../components/Header";
import { ExpenseDispatchContext } from "../App";
import { useContext } from "react";
import useExpense from "../hooks/useExpense";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(ExpenseDispatchContext);
  const currentItem = useExpense(params.id);

  const onClickDelete = () => {
    if (window.confirm("지출 내역을 삭제하겠습니까?")) {
      //일기 삭제 로직
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm("수정 하시겠습니까?")) {
      onUpdate(
        params.id,
        input.storeName,
        input.createDate.getTime(),
        Number(input.amount),
        input.iconId,
        input.payment,
        input.memo
      );
    }
    nav("/", { replace: true });
  };
  return (
    <div>
      <Header
        title={"지출 수정"}
        leftChild={<Button onClick={() => nav(-1)} text={"<"} />}
        rightChild={
          <Button onClick={onClickDelete} text={"삭제"} type={"DELETE"} />
        }
      />
      <Content initData={currentItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
