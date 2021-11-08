import "./App.css";
import CharacterCounter from "./components/counter/CharacterCounter";
import TodoList from "./components/todo/TodoList";
import { UserApp } from "./components/sync/Sync";
import { AsyncUserApp } from "./components/sync/Async";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CharacterCounter />
        <br />
        <TodoList />
        <hr />
        <UserApp />
        <hr />
        <AsyncUserApp />
      </header>
    </div>
  );
}

export default App;
