import { useState, useEffect } from "react";
import HooksTimer from "./HooksTimer";

function Hooks() {
  const [time, setTime] = useState(1);
  const handleClick = () => {
    let newTime;
    if (time >= 12) newTime = 1;
    else newTime = time + 1;
    setTime(newTime);
  };

  const [names, setNames] = useState(() => {
    return ["홍길동", "김민수"];
  }); //콜백함수를 이용하여 초기 값을 맨 처음 화면이 렌더링 될 때만 함수가 불려짐

  //////////////////////////////////////////////////
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleUpload = (prevState) => {
    setNames((prevState) => {
      console.log("이전 state", prevState);
      return [input, ...prevState];
    });
  };

  /////////////////////////////////////////////////
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const handleCountUpdate = (count) => {
    setCount(count);
  };

  const addCount = (x, y) => {
    setCount(count + x);
  };

  const subCount = (x) => {
    setCount(count - x);
  };

  const handleCountInputChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {}, []); // 마운팅, [item] 변경 시에만 실행

  //////////////////////////////////////////////////
  const [showTimer, setShowTimer] = useState(false);

  ///////////////////////////////////////////////////
  const [todos, setTodos] = useState([]);

  const onClick = () => {
    import("./Todo.js").then(({ Todo }) => {
      const position = todos.length + 1;
      const newTodo = <Todo key={position} title={`할 일 ${position}`} />;
      setTodos([...todos, newTodo]);
    });
  };

  return (
    <div className="Hooks">
      <h1>함수형 컴포넌트</h1>
      <p>
        <span>현재 시각: {time}시</span>
        <button onClick={handleClick}>Update</button>
      </p>
      <hr></hr>
      <div>
        <input type="text" value={input} onChange={handleInputChange} />
        <button onClick={handleUpload}>이름 추가</button>
        {names.map((name, idx) => {
          return <p key={idx}>{name}</p>;
        })}
      </div>
      <hr></hr>
      <div>
        <p>
          <span>count: {count}</span>
          <button onClick={() => handleCountUpdate(5)}>숫자변경</button>
          <button onClick={() => addCount(3, 4)}>더하기</button>
          <button onClick={() => subCount(2)}>빼기</button>
        </p>
        <p>
          <input type="text" value={name} onChange={handleCountInputChange} />
          <span>name: {name}</span>
        </p>
      </div>
      <hr></hr>
      <div>
        {showTimer && <HooksTimer />}
        <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
      </div>
      <hr></hr>
      <button onClick={onClick}>할 일 추가</button>
      {todos}
      <hr></hr>
    </div>
  );
}

export default Hooks;
