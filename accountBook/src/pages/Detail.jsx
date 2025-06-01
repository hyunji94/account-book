import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import Viewer from "../components/Viewer";
import useExpense from "../hooks/useExpense";
import { getStringDate } from "../util/get-string-date";
import usePageTitle from "../hooks/usePageTitle";

const Detail = () => {
  const params = useParams();
  const nav = useNavigate();
  usePageTitle(`지출 관리 > ${params.id}번 내역 상세보기`);

  const currentItem = useExpense(params.id);
  if (!currentItem) {
    return <div>데이터 로딩중...</div>;
  }

  const { storeName, createDate, amount, iconId, payment, memo } = currentItem;
  const title = getStringDate(new Date(createDate));

  return (
    <div>
      <Header
        title={`${title} 상세`}
        leftChild={<Button onClick={() => nav(-1)} text={"<"} />}
        rightChild={
          <Button onClick={() => nav(`/edit/${params.id}`)} text={"수정"} />
        }
      />
      <Viewer
        storeName={storeName}
        createDate={createDate}
        amount={amount}
        iconId={iconId}
        payment={payment}
        memo={memo}
      />
    </div>
  );
};

export default Detail;
