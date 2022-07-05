import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Timer from './component/Timer';

function App() {
  const [time, setTime] = useState(1);

  const handleClick = () => {
    let newTime;
    if (time >= 12) {
      newTime = 1;
    } else {
      newTime = time + 1;
    }
    setTime(newTime);
  };

  //////////////////////////////////////////////////////////////
  const [names, setNames] = useState(() => {
    return ['홍길동', '김민수'];
  });  // 콜백함수를 이용하여 초기 값을 맨 처음 화면이 렌더링 될 때만 함수가 불려짐 

  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleUpload = (prevState) => {
    setNames((prevState) => {
      console.log('이전 State', prevState);
      return ([input, ...prevState]);
    })
  }

  //////////////////////////////////////////////////////////////
  const [count, setCount] = useState(1);
  const [name, setName] = useState('');

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleCountInputChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {

  }, []); // 마운팅, [ item ] 변경 시에만 실행

  //////////////////////////////////////////////////////////////
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div className="App">
      <p>
        <span>현재 시각: {time}시</span>
        <button onClick={handleClick}>Update</button>
      </p>
      <hr></hr>
      <div>
        <input type='text' value={input} onChange={handleInputChange} />
        <button onClick={handleUpload}>Upload</button>
        {names.map((name, idx) => {
          return <p key={idx}>{name}</p>;
        })}
      </div>
      <hr></hr>
      <div>
        <p>
          <button onClick={handleCountUpdate}>Update</button>
          <span>count: {count}</span>
        </p>
        <p>
          <input type='text' value={name} onChange={handleCountInputChange} />
          <span>name: {name}</span>
        </p>
      </div>
      <hr></hr>
      <div>
        {showTimer && <Timer />}
        <button onClick={()=>setShowTimer(!showTimer)}>Toggle Timer</button>
      </div>
    </div>
  );
}

export default App;
