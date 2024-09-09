import React from "react";
import useUserInfoStore from "../zustand/UserInfoStore";
import { register } from "../api/auth";
import { useNavigate } from "react-router-dom";

const AuthForm = ({ mode, onSubmit }) => {
  const userInfo = useUserInfoStore((state) => state.userInfo);
  const handleInputChange = useUserInfoStore(
    (state) => state.handleInputChange
  );
  const navigate = useNavigate();

  const inputStyle =
    "p-4 my-2 bg-myPink3 rounded-xl focus:outline-none placeholder:text-zinc-950 font-logy300";

  const buttonStyle =
    "p-4 my-2 bg-myPink1 rounded-xl hover:bg-myBeige font-logy600";

  const titleStyle = "mb-5 text-xl font-logy500";

  if (mode === "signup")
    return (
      <>
        <p className={titleStyle}>회원가입</p>
        <form
          className="flex flex-col w-96"
          onSubmit={() => register(userInfo)}
        >
          <input
            type="text"
            value={userInfo.id || ""}
            onChange={(e) => handleInputChange("id", e.target.value)}
            className={inputStyle}
            placeholder="아이디를 입력하세요"
          ></input>
          <input
            type="passward"
            value={userInfo.passward || ""}
            onChange={(e) => handleInputChange("passward", e.target.value)}
            className={inputStyle}
            placeholder="비밀번호를 입력하세요"
          ></input>
          <input
            type="text"
            value={userInfo.nickname || ""}
            className={inputStyle}
            onChange={(e) => handleInputChange("nickname", e.target.value)}
            placeholder="닉네임을 입력하세요"
          ></input>
          <button type="submit" className={buttonStyle}>
            회원가입
          </button>
        </form>
      </>
    );
  else if (mode === "login")
    return (
      <>
        <p className={titleStyle}>로그인</p>
        <form className="flex flex-col w-96">
          <input
            type="text"
            value={userInfo.id || ""}
            onChange={(e) => handleInputChange("id", e.target.value)}
            className={inputStyle}
            placeholder="아이디를 입력하세요"
          ></input>
          <input
            type="passward"
            value={userInfo.passward || ""}
            onChange={(e) => handleInputChange("passward", e.target.value)}
            className={inputStyle}
            placeholder="비밀번호를 입력하세요"
          ></input>
          <button type="submit" className={buttonStyle}>
            로그인
          </button>
          <button
            type="button"
            onClick={() => navigate("/signup")}
            className="p-4 my-2 bg-myPink3 rounded-xl hover:bg-myBeige font-logy600"
          >
            회원가입 하러가기
          </button>
        </form>
      </>
    );
};

export default AuthForm;
