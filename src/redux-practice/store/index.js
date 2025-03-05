import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';
import authReducer from './authSlice';


// 리덕스는 단 하나의 스토어만 사용한다.
// 스토어는 최상단 컴포넌트에 제공해야 한다.
const store = configureStore({
  // reducer: counterSlice.reducer

  // 단일 슬라이스가 아닌 다중 슬라이스
  // -> 컴포넌트들이 상태값을 가져갈 때(useSelector) 이제 키를 명시해야함
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;