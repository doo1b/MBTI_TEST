import { create } from "zustand";

// 현재 유저가 로그인인지 아닌지 확인하기 위한 user 스테이트
const useAuthStore = create((set) => ({
  user: null,
  isUserLoggedIn: () =>
    set((state) => {
      if (localStorage.getItem("accessToken")) {
        return { ...state, user: true }; // 상태를 업데이트
      } else {
        return { ...state, user: false }; // 상태를 업데이트
      }
    }),
}));

export default useAuthStore;
