import React, { useState } from "react";

function NumberCalc() {
  const [number, setNumber] = useState(0);

  const handleNumber = (number) => {
    console.log(1);
    setNumber(number);
  };

  const addNumber = (x, y) => {
    setNumber(number + x);
  };

  const subNumber = (x) => {
    setNumber(number - x);
  };
  return (
    <div>
      {number}
      <button onClick={() => handleNumber(2)}>숫자 변경</button>
      <div onClick={() => addNumber(3, 4)}>더하기</div>
      <div onClick={() => subNumber(2)}>빼기</div>
    </div>
  );
}

export default NumberCalc;
