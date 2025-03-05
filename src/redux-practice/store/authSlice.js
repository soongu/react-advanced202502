import { createSlice } from "@reduxjs/toolkit";

// 인증 관련 전역상태관리 슬라이스
const initialAuthState = {
  isLoggedIn: false,
}; // 인증 관련 상태 초기값

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  }, // 상태변경 함수
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;