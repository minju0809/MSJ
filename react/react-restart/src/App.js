import "./App.css";
import "./css/BadmintonBoard.css";
import TodoList from './component/TodoList';
import NumberCalc from "./component/NumberCalc";
import Button from "./component/Button1";
import Box from "./component/Box1";
import BadmintonBoard from './component/BadmintonBoard';
import MyComponent from './component/MyComponent';
import EventPractice from './component/EventPractice';
import IterationSample from "./component/IterationSample";
import ScrollBox from "./component/ScrollBox";
// import ValidationSample from "./component/ValidationSample";
// import './css/ValidationSample.css';

function App() {
  return (
    <div className="App">
      <NumberCalc />
      <TodoList />
      <Button size='big' />
      <Button size='small' />
      <Box size='big' />
      <Box size='small' />
      <MyComponent name='React' age={4}/>
      <EventPractice/> {/* keypress 있음 */}
      <IterationSample />
      <BadmintonBoard />
    </div>
  );
}

export default App;
