import * as React from "react";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../../atoms";

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldList) => [
      ...oldList,
      {
        id: new Date().getTime(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const onChange = (e) => setInputValue(e.target.value);

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

export default TodoItemCreator;
