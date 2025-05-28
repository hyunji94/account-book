import "./App.css";
import { useReducer, useRef, createContext } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
//import iconFood from "./assets/icon_food.png";
import { getIconImage } from "./util/get-icon-image";
import Button from "./components/Button";
import Header from "./components/Header";
import Edit from "./pages/Edit";

//1. "/" : 모든 지출 내역을 조회하는 main 페이지
//2. "/new" : 지출내역을 추가하는 New 페이지
//3. "/detail" : 지출내역을 상세하게 조회하는 Detail 페이지
const mockData = [
  {
    id: 1,
    storeName: "컴포즈 커피 관악신사교차로점",
    createDate: new Date("2025-05-22").getTime(),
    amount: 3000,
    iconId: 1,
    payment: "card",
    memo: "커피구매",
  },
  {
    id: 2,
    storeName: "한신우동 고덕로데오점",
    createDate: new Date("2025-05-10").getTime(),
    amount: 10000,
    iconId: 3,
    payment: "card",
    memo: "점심값",
  },
  {
    id: 3,
    storeName: "헤어살롱",
    createDate: new Date("2025-04-05").getTime(),
    amount: 50000,
    iconId: 4,
    payment: "cash",
    memo: "네이버페이 구매",
  },
];
function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case "DELETE":
      return state.filter((item) => item.id != action.id);
    default:
      return state;
  }
}
export const ExpenseStateContext = createContext();
export const ExpenseDispatchContext = createContext();

function App() {
  // const nav = useNavigate();
  // const onClickButton = () => {
  //   nav("/new");
  // };
  const [data, dsipatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  //신규
  const onCreate = (storeName, createDate, amount, iconId, payment, memo) => {
    dsipatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        storeName,
        createDate,
        amount,
        iconId,
        payment,
        memo,
      },
    });
  };
  //수정
  const onUpdate = (
    id,
    storeName,
    createDate,
    amount,
    iconId,
    payment,
    memo
  ) => {
    dsipatch({
      type: "UPDATE",
      data: {
        id,
        storeName,
        createDate,
        amount,
        iconId,
        payment,
        memo,
      },
    });
  };
  //삭제
  const onDelete = (id) => {
    dsipatch({
      type: "DELETE",
      id,
    });
  };

  return (
    <>
      {/* 페이지 공통항목  */}
      {/* <div>
        <Link to={"/"}>홈으로 가기</Link>
      </div> */}
      {/* <button onClick={onClickButton}>지출내역 추가하기</button> */}
      {/* <img src={getIconImage(1)} /> */}

      <ExpenseStateContext.Provider value={data}>
        <ExpenseDispatchContext.Provider
          value={{ onCreate, onUpdate, onDelete }}
        >
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/new" element={<New />}></Route>
            <Route path="/edit/:id" element={<Edit />}></Route>
            <Route path="/detail/:id" element={<Detail />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </ExpenseDispatchContext.Provider>
      </ExpenseStateContext.Provider>
    </>
  );
}

export default App;
