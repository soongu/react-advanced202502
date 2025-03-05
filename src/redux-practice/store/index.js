import { createStore } from "redux";



// 액션 타입 상수
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const MULTIPLY = 'MULTIPLY';
export const TOGGLE = 'TOGGLE';

// 상태관리할 데이터의 초기값을 세팅
const initialState = {
  count: 0,
  showCounter: true,
};

// reducer: 상태관리를 위한 함수
/**
 * 
 * @param {*} state - 상태변경 이전의 상태값
 * @param {*} action - 상태를 어떻게 변경시킬지의 대한 명세서
 * @return - 변경이 완료된 새로운 상태값
 */
const counterReducer = (state = initialState, action) => { 
  console.log('prev state: ', state);
  console.log('action: ', action);

  // 상태변경 처리 
  // 1. 상태값 변경시 action에 들어온 type별로 다르게 처리한다.
  // 2. 상태값 변경은 반드시 새로운 객체를 할당해야 한다.
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case MULTIPLY:
      return {
        ...state,
        count: state.count * action.payload,
      };
    case TOGGLE:
      return {
        ...state,
        showCounter: !state.showCounter
      }
  }
  return state;
};

// 리덕스는 단 하나의 스토어만 사용한다.
// 스토어는 최상단 컴포넌트에 제공해야 한다.
const store = createStore(counterReducer);

export default store;