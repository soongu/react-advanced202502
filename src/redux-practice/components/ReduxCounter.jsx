import { useSelector } from 'react-redux';
import styles from './ReduxCounter.module.css';

const ReduxCounter = () => {

  // 리덕스가 관리하는 상태값을 불러오기
  const count = useSelector(state => state.count);

  return (
    <main className={styles.counter}>
      <h1>Redux Counter</h1>
      <div className={styles.value}>{ count }</div>
      <button>Toggle Counter</button>
    </main>
  );
};

export default ReduxCounter;
