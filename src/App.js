import "./App.css";
import CharacterCounter from "./components/counter/CharacterCounter";
import TodoList from "./components/todo/TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CharacterCounter />
        <br />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
