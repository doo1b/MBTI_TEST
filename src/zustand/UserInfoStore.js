import { create } from "zustand";

const useUserInfoStore = create((set) => ({
  userInfo: {
    id: "",
    password: "",
    nickname: "",
  },
  handleInputChange: (field, value) =>
    set((state) => ({
      userInfo: {
        ...state.userInfo,
        [field]: value,
      },
    })),
}));

export default useUserInfoStore;
