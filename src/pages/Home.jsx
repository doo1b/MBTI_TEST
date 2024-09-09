import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <p className="text-5xl font-logy700">무료 성격 테스트</p>
      <p className="text-2xl my-14 font-logy400">
        문항에 대한 본인의 생각을 선택하여 성격 유형을 확인해보세요!
      </p>
      <Link to="/test">
        <button className="px-10 py-5 text-2xl rounded-2xl bg-myPink2 font-logy600 hover:bg-myBeige">
          테스트 하러가기
        </button>
      </Link>
    </>
  );
};

export default Home;
