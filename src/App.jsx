import './App.css';
import {useState} from 'react';

function App() {
  const [todoList, setToDoList] = useState([])
  return (
    <div className="App">
      <div className="addTask">
        <input></input>
        <button>Add Task</button>
      </div>
      <div className="list">
      </div>
  </div>
    );
}


export default App;
