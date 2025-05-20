import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";

//1. "/" : 모든 지출 내역을 조회하는 main 페이지
//2. "/new" : 지출내역을 추가하는 New 페이지
//3. "/detail" : 지출내역을 상세하게 조회하는 Detail 페이지
function App() {
  const nav = useNavigate();
  const onClickButton = () => {
    nav("/new");
  };
  return (
    <>
      {/* 페이지 공통항목  */}
      <div>
        <Link to={"/"}>홈으로 가기</Link>
      </div>
      <button onClick={onClickButton}>지출내역 추가하기</button>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/new" element={<New />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
