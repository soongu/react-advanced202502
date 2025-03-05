import { configureStore, createSlice } from "@reduxjs/toolkit";


// 상태관리할 데이터의 초기값을 세팅
const initialState = {
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
  initialState,
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    multiply(state, action) {
      state.count *= 3;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});


// 리덕스는 단 하나의 스토어만 사용한다.
// 스토어는 최상단 컴포넌트에 제공해야 한다.
const store = configureStore({
  reducer: counterSlice.reducer
});

// 상태를 변경하는 함수들을 모두 내보내기
export const counterActions = counterSlice.actions;

export default store;