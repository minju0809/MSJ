import React, { useState, useEffect } from "react";

const HooksTimer = (props) => {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setNumber(number + 1);
      // console.log("타이머 돌아가는 중...", number+1); // 왜? timer 값이 3, 5, 7 ,9 --

    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });

  useEffect(() => {
    console.log("number changed", number)
  }, [number])

  return (
    <div>
      <span>타이머 시작. 콘솔 확인</span>
      <div>{number}</div>
    </div>
  );
};

export default HooksTimer;
