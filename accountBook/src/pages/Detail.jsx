import { useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();
  console.log(params);

  return <div>{params.id}번 지출내역입니다.(detail)</div>;
};

export default Detail;
