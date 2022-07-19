import "./App.css";
import "./css/BadmintonBoard.css";
import Basic from './component/Basic';
import NumberCalc from "./component/NumberCalc";
import TodoList from "./component/TodoList";
import Hooks from "./component/Hooks";
import Box from "./component/Box1";
import MyComponent from "./component/MyComponent";
import EventPractice from "./component/EventPractice";
import IterationSample from "./component/IterationSample";
import Hello from './component/Hello';
import BadmintonBoard from "./component/BadmintonBoard";
import ScrollBoxExecution from "./component/ScrollBoxExecution";
// import ValidationSample from "./component/ValidationSample";
// import './css/ValidationSample.css';

function App() {
  return (
    <div className="App">
      <Basic />
      <NumberCalc />
      <TodoList />
      <Box size="big" />
      <Box size="small" />
      <IterationSample />
      <Hooks />
      <MyComponent name="React" age={4} />
      <EventPractice /> {/* keypress 있음 */}
      <Hello />
      <ScrollBoxExecution />
      <BadmintonBoard />
    </div>
  );
}

export default App;
