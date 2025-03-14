import { useDispatch, useSelector } from 'react-redux';
import styles from './ReduxCounter.module.css';
import { increment, decrement, multiply, toggle } from '../store/counterSlice';

const ReduxCounter = () => {

  // 리덕스가 관리하는 상태값을 불러오기
  const count = useSelector(state => state.counter.count);
  const show = useSelector((state) => state.counter.showCounter);

  // 리덕스의 상태변경을 위한 함수 가져오기
  const dispatch = useDispatch();

  const handleIncrease = e => { 
    
    // 카운트를 증가시키려면 redux store에 접근하여 상태값을 변경요청해야함.
    // 리덕스에서는 상태값 변경을 위해 dispatch함수를 호출해야함.
    dispatch(increment());
  };

  const handleDecrease = (e) => {
    dispatch(decrement());
  };

  const handleMultiply = (e) => {
    dispatch(multiply({ count: 3 }));
  };

  return (
    <main className={styles.counter}>
      <h1>Redux Counter</h1>

      {show && <div className={styles.value}>{count}</div>}
      
      <div style={{
        marginBottom: 10
      }}>
        <button onClick={handleIncrease}>Increment</button>
        <button onClick={handleDecrease}>Decrement</button>
        <button onClick={handleMultiply}>IncrementDouble</button>
      </div>
      <button onClick={() => dispatch(toggle())}>Toggle Counter</button>
    </main>
  );
};

export default ReduxCounter;
