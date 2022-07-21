import LifeCycleSample from "./LifeCycleSample";
import { useState } from "react";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function Component() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('#000000');
  const handleClick = () => {
    // setCount(count + 1);
    setColor(()=>{getRandomColor(color)});
  };

  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setUsername(e);
  };
  const handleCheckClick = (e) => {
    setMessage(e);
    alert(`${username} : ${message}`);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleKeyPress();
    }
  };

  const [input, setInput] = useState('');
  const [array, setArray] = useState(() => {
    return ["봄", "여름", "가을", "겨울"];
  });
  const handleArrayChange = (e) => {
    setInput(e.target.value);
  };
  const handleUpload = (prevState) => {
    setArray((prevState) => {
      console.log("이전 state", prevState);
      return [input, ...prevState];
    });
  };
  const handleArrayRemove = () => {
    // 항목 삭제..
  }

  return (
    <div>
      count: {count}
      <button onClick={() => handleClick()}>랜덤 색상</button>
      <LifeCycleSample />  {/* color={setColor} */}
      <input type="text" name="username" value={username} placeholder="유저명" onChange={() => handleChange()} />
      <input type="text" name="message" value={message} placeholder="아무거나 입력해보세요" onChange={() => handleChange()} onKeyPress={() => handleKeyPress()} />
      <button
        onClick={() => {handleCheckClick()}}>확인</button>
      <div>
        <input type="text" value={input} onChange={handleArrayChange} />
        <button onClick={handleUpload}>이름 추가</button>
        {array.map((name, idx) => {
          return <p key={idx}>{name}</p>;
        })}
      </div>
    </div>
  );
}

export default Component;
