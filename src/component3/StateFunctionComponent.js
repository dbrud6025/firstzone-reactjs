import React, { useState } from "react";

function StateFunctionComponent(props) {
  //Top level 에서만 Hooks를 사용할 수 있다. (일반 함수에서는 불가)
  const [count, setCount] = useState(0); //count = 0이라고 초기화 하는 것과 동일
  const [message, setInfo] = useState(
    "버튼을 누르면 값이 변경!... 화면이 자동 변경!"
  );
  const plus = () => {
    setCount(count + 1);
  };
  const btnClick = (event) => {
    let btnText = event.target.innerHTML;
    if (btnText === "+") {
      setCount(count + 1);
      setInfo("ADD");
    } else {
      setCount(count - 1);
      setInfo("MINUS");
    }
  };

  return (
    <div>
      <h1>StateFunctionComponent 연습</h1>
      <p>
        현재값 :{count}....메시지 : {message}
      </p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={plus}>+</button>
      <button onClick={btnClick}>+</button>
      <button onClick={btnClick}>-</button>
    </div>
  );
}

export default StateFunctionComponent;
