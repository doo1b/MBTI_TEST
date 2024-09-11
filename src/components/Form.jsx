import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { login, register, updateProfile } from "../api/auth";
import useUserInfoStore from "../zustand/UserInfoStore";
import { AuthContext } from "../shared/AuthContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Form = ({ mode }) => {
  const queryClient = useQueryClient();
  const { setIsLogin, loginUser } = useContext(AuthContext);
  const token = localStorage.getItem("accessToken");
  const navigate = useNavigate();

  const userInfo = useUserInfoStore((state) => state.userInfo);
  const handleInputChange = useUserInfoStore(
    (state) => state.handleInputChange
  );

  const { mutate: changeNickname } = useMutation({
    mutationFn: ({ nickname, token }) => updateProfile({ nickname }, token),
    onSuccess: () => {
      queryClient.invalidateQueries(["userData"]);
    },
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(userInfo);
      setIsLogin(true);
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await register(userInfo);
      alert("회원가입 완료!");
      navigate("/login");
    } catch (error) {
      alert(error);
    }
  };

  if (mode === "signup")
    return (
      <>
        <p className="formTitle">회원가입</p>
        <form className="formBox" onSubmit={handleSignup}>
          <input
            type="text"
            value={userInfo.id || ""}
            onChange={(e) => handleInputChange("id", e.target.value)}
            className="formInput"
            placeholder="아이디를 입력하세요"
          ></input>
          <input
            type="password"
            value={userInfo.password || ""}
            onChange={(e) => handleInputChange("password", e.target.value)}
            className="formInput"
            placeholder="비밀번호를 입력하세요"
          ></input>
          <input
            type="text"
            value={userInfo.nickname || ""}
            className="formInput"
            onChange={(e) => handleInputChange("nickname", e.target.value)}
            placeholder="닉네임을 입력하세요"
          ></input>
          <button type="submit" className="btn">
            회원가입
          </button>
        </form>
      </>
    );
  else if (mode === "login")
    return (
      <>
        <p className="formTitle">로그인</p>
        <form className="formBox" onSubmit={handleLogin}>
          <input
            type="text"
            value={userInfo.id || ""}
            onChange={(e) => handleInputChange("id", e.target.value)}
            className="formInput"
            placeholder="아이디를 입력하세요"
          ></input>
          <input
            type="password"
            value={userInfo.password || ""}
            onChange={(e) => handleInputChange("password", e.target.value)}
            className="formInput"
            placeholder="비밀번호를 입력하세요"
          ></input>
          <button type="submit" className="btn">
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
  else if (mode === "profile") {
    return (
      <>
        <p className="formTitle">내 프로필 수정</p>
        <p className="formTitle"> 현재 닉네임 : {loginUser?.nickname}</p>
        <form
          className="formBox"
          onSubmit={(e) => {
            e.preventDefault();
            changeNickname({ nickname: userInfo.nickname, token });
          }}
        >
          <input
            type="text"
            value={userInfo.nickname || ""}
            onChange={(e) => handleInputChange("nickname", e.target.value)}
            className="formInput"
            placeholder="변경할 닉네임을 입력하세요"
          ></input>
          <button type="submit" className="btn">
            변경하기
          </button>
        </form>
      </>
    );
  }
};

export default Form;
