import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ExpenseStateContext, ExpenseDispatchContext } from "../App";

const useExpense = (id) => {
  const data = useContext(ExpenseStateContext);
  const nav = useNavigate();
  const [currentItem, setCurrentItem] = useState();

  useEffect(() => {
    const currentItem = data.find((item) => String(item.id) === String(id));
    if (!currentItem) {
      window.alert("존재하지 않는 내역 입니다.");
      nav("/", { replace: true });
    }
    return setCurrentItem(currentItem);
  }, [id]);

  return currentItem;
};

export default useExpense;
