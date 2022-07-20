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

  /////////////////////////////////////////////////
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const handleNumberChange = (count) => {
    setCount(count);
  };

  const addNumber = (x, y) => {
    setCount(count + x);
  };

  const subNumber = (x) => {
    setCount(count - x);
  };

  const handleValueInput = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {}, []); // 마운팅, [item] 변경 시에만 실행

  //////////////////////////////////////////////////
  const [showTimer, setShowTimer] = useState(false);

  //////////////////////////////////////////////////
  const [input, setInput] = useState("");
  const [names, setNames] = useState(() => {
    return ["이름"];
  }); //콜백함수를 이용하여 초기 값을 맨 처음 화면이 렌더링 될 때만 함수가 불려짐

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleUpload = (prevState) => {
    setNames((prevState) => {
      console.log("이전 state", prevState);
      return [input, ...prevState];
    });
  };

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
        <p>
          <span>count: {count}</span>
          <button onClick={() => handleNumberChange(5)}>숫자변경</button>
          <button onClick={() => addNumber(3, 4)}>더하기</button>
          <button onClick={() => subNumber(2)}>빼기</button>
        </p>
      </div>
      <hr></hr>
      <div>
        {showTimer && <HooksTimer />}
        <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
      </div>
      <hr></hr>
      <div>
        <p>
          <input type="text" value={name} onChange={handleValueInput} />
          <span>name: {name}</span>
        </p>
        <input type="text" value={input} onChange={handleInputChange} />
        <button onClick={handleUpload}>이름 추가</button>
        {names.map((name, idx) => {
          return <p key={idx}>{name}</p>;
        })}
      </div>
      <hr></hr>
      <button onClick={onClick}>할 일 추가</button>
      {todos}
      <hr></hr>
    </div>
  );
}

export default Hooks;
