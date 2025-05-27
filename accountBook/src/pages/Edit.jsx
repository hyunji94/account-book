import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import Content from "../components/Content";
import Header from "../components/Header";
import { ExpenseStateContext, ExpenseDispatchContext } from "../App";
import { useContext, useEffect, useState } from "react";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(ExpenseDispatchContext);
  const data = useContext(ExpenseStateContext);
  const [currentItem, setCurrentItem] = useState();

  useEffect(() => {
    const currentItem = data.find(
      (item) => String(item.id) === String(params.id)
    );
    if (!currentItem) {
      window.alert("존재하지 않는 내역 입니다.");
      nav("/", { replace: true });
    }
    return setCurrentItem(currentItem);
  }, [params.id, data]);

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
        input.iconId
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
