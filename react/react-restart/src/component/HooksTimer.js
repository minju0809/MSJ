import React, {useEffect} from 'react';

const HooksTimer = (props) => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('타이머 돌아가는 중...', timer); // 왜? timer 값이 3, 5, 7 ,9 -- 
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  }, []);

  return(
    <div>
      <span>타이머 시작. 콘솔 확인</span>
    </div>
  )
}

export default HooksTimer;