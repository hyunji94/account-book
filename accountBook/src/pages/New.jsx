import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Content from "../components/Content";
import Header from "../components/Header";
import { useContext } from "react";
import { ExpenseDispatchContext } from "../App";

const New = () => {
  const { onCreate } = useContext(ExpenseDispatchContext);

  const nav = useNavigate();
  const onSubmit = (input) => {
    onCreate(
      input.storeName,
      input.createDate.getTime(),
      Number(input.amount),
      input.iconId
    );
    nav("/", { replace: true }); //뒤로가기 방지까지 추가
  };
  return (
    <div className="New">
      <Header
        title={"신규 지출"}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로가기"} />}
      />
      <Content onSubmit={onSubmit} />
    </div>
  );
};

export default New;
