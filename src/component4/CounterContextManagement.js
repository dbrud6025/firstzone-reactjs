import React, { createContext, useContext, useState } from "react";
// 전역 영역 생성
export const CounterContext = createContext();
// 전역 영역 제공
export const CounterProvider = (props) => {
  const [count, setCount] = useState(0);
  const addHandler = () => {
    setCount(count + 1);
  };
  const minusHandler = () => {
    setCount(count - 1);
  };
  const [username, setUserName] = useState("");
  const [mystyle, setmystyle] = useState({
    border: "3px solid green",
    color: "red",
  });
  return (
    <div>
      <CounterContext.Provider
        value={{
          count,
          addHandler,
          minusHandler,
          username,
          mystyle,
          setUserName,
          setmystyle,
        }}
      >
        {props.children}
      </CounterContext.Provider>
    </div>
  );
};
function CounterContextManagement(props) {
  return (
    <div>
      <CounterProvider>
        <CountLabel></CountLabel>
        <PlusButton></PlusButton>
        <NameChange></NameChange>
      </CounterProvider>
    </div>
  );
}
function CountLabel() {
  const { count, username } = useContext(CounterContext);
  return (
    <div>
      <h1>CountLabel Component</h1>
      <p>{count}</p>
      <p>name : {username}</p>
    </div>
  );
}
function PlusButton() {
  const { addHandler } = useContext(CounterContext);
  return (
    <div>
      <h1>PlusButton Component</h1>
      <button onClick={addHandler}>+</button>
    </div>
  );
}
function NameChange() {
  const { setUserName, username } = useContext(CounterContext);
  return (
    <div>
      <h1>NameChange Component</h1>
      <p>name : {username}</p>
      <input onChange={(e) => setUserName(e.target.value)}></input>
    </div>
  );
}
export default CounterContextManagement;
