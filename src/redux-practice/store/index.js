import { configureStore, createSlice } from "@reduxjs/toolkit";


// 상태관리할 데이터의 초기값을 세팅
const initialCounterState = {
  count: 0,
  showCounter: true,
};

/*
  redux toolkit에서는 reducer대신 slice라는 개념을 사용

  # createSlice의 option객체에 들어가있는 프로퍼티 설명

  prop1: name - 컴포넌트가 해당 리듀서를 사용할 때 부르는 이름
  prop2: initialState - 관리할 상태값들의 초기값
  prop3: reducers - 기존 리듀서에서 사용하던 내용들(실제 액션)
*/

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    // action: dispatch에서 전달된 파라미터
    multiply(state, action) {
      state.count *= action.payload.count;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});


// 인증 관련 전역상태관리 슬라이스
const initialAuthState = {
  isLoggedIn: false
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


// 리덕스는 단 하나의 스토어만 사용한다.
// 스토어는 최상단 컴포넌트에 제공해야 한다.
const store = configureStore({
  // reducer: counterSlice.reducer

  // 단일 슬라이스가 아닌 다중 슬라이스 
  // -> 컴포넌트들이 상태값을 가져갈 때(useSelector) 이제 키를 명시해야함
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  }
});

// 상태를 변경하는 함수들을 모두 내보내기
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;