import * as React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { textState } from "../../atoms";

const TextInput = () => {
  const [text, setText] = useRecoilState(textState); // useState 처럼 꺼내옴.
  const value = useRecoilValue(textState); // value만 꺼내옴.
  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <button onClick={() => setText("")}>reset</button>
      <br />
      <input type={"text"} value={text} onChange={onChange} />
      <br />
      value from useRecoilValue : {value}
      <br />
      Echo: {text}
    </div>
  );
};

export default TextInput;
