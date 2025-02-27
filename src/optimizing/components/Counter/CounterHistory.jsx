import React, { useState } from 'react';

import { log } from '../../log';

const HistoryItem = ({ count }) => {
  log('<HistoryItem /> rendered', 3);

  const [selected, setSelected] = useState(false);

  const clickHandler = () => {
    setSelected((prevSelected) => !prevSelected);
  };

  return (
    <li
      onClick={clickHandler}
      className={selected ? 'selected' : undefined}>
      {count}
    </li>
  );
};

const CounterHistory = ({ history }) => {
  log('<CounterHistory /> rendered', 2);

  // key가 변경되면 리렌더링(컴포넌트를 완전히 초기상태로 만듦)이 수행됨
  return (
    <ol>
      {history.map(({ id, value }) => (
        <HistoryItem
          key={id}
          count={value}
        />
      ))}
    </ol>
  );
};
export default CounterHistory;
