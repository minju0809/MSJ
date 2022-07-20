import { useState } from "react";

function Counter({initialCount}) {
  // initialCount = 0; // 이게 있어야 값을 표시 할 수 있는거 아닌가?
  const [count, setCount] = useState(initialCount);
  console.log(count); // NaN
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button> 
      {/* 값이 없을 때 누르면 콘솔에 아무것도 찍히지 않다가 +, - 누르고 나서 누르면 undefined */}
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button> {/* NaN */}
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button> {/* NaN */}
    </>
  );
}

export default Counter;