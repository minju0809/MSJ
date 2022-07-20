import "./App.css";
import "./css/BadmintonBoard.css";
import "./css/Component.css";
import Counter from './component/Counter';
import Basic from "./component/Basic";
import Hooks from "./component/Hooks";
// import Box from "./component/Box1";
import MyComponent from "./component/MyComponent";
import BadmintonBoard from "./component/BadmintonBoard";
import ScrollBox from "./component/ScrollBox";
// import ValidationSample from "./component/ValidationSample";
// import './css/ValidationSample.css';

function App() {
  return (
    <div className="App">
      <Counter />
      <Basic />
      {/* <Box size="big" /> */}
      {/* <Box size="small" /> */}
      <div className="Component">
        <Hooks />
        <MyComponent name="React" age={4} />
      </div>
      <ScrollBox />
      <BadmintonBoard />
    </div>
  );
}

export default App;
