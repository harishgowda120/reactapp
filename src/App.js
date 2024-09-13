import './App.css';
import {FunctionalComp} from "./Components/FunctionalComp"
import {ClassComp,Class1} from './Components/ClassComp';
import Click from './Components/Click';
import Counter from './Components/Counter';
import ParentComp from './Components/ParentComp';
function App() {
  return (
    <div class="align">
    <h1>HELLO! I am Harish Gowda N</h1>
    <h1>AND I AM FROM MANDYA</h1>
    <FunctionalComp></FunctionalComp>
    <ClassComp></ClassComp>
    <Class1></Class1>
    <Click></Click>
    <Counter></Counter>
    <ParentComp></ParentComp>
    </div>
    );
}

export default App;