import React, { Fragment } from "react";

function MyComponentA(props) {
  var score = 100;
  var a = null;
  var b = 10 > 1 ? "크다" : "작다";
  var c = undefined;

  //환경변수 읽기
  console.log("public 경로: " + process.env.PUBLIC_URL);
  console.log("MYname: " + process.env.REACT_APP_MYNAME);
  console.log("email: " + process.env.REACT_APP_MY_EMAIL);
  console.log("REACT_APP으로 시작하지 않아서!: " + process.env.MY_ADDRESS);

  return (
    <Fragment>
      <h1>JSX 문법 익히기</h1>
      <div>
        <p>1. Root가 1개여야 한다!!!</p>
        <p>2. 자바스크립트 표현식!!! 점수={score}</p>
        <p>3. 빈 tag는 fragment라고 한다.</p>
        <p>4. 3항 연산자 : {score >= 90 ? <b>"합격"</b> : <b>"불합격"</b>}</p>
        <p>5. 조건부 렌더링 : {score >= 90 && "합격"}</p>
        <p>
          6. null, false, undefined : {a} {b} {c}
        </p>
      </div>
    </Fragment>
  );
}

export function MyComponentB(props) {
  const hobbyArr = ["농구", "축구", "볼링", "골프", "공부"];
  for (let i = 0; i < hobbyArr.length; i++) {
    console.log(hobbyArr[i]);
  }

  function f(item, index) {
    return <li key={index}>{item}</li>;
  }

  //   const hobbyArr2 = hobbyArr.map((item, index) => <li key={index}>{item}</li>);
  const hobbyArr2 = hobbyArr.map(f);

  console.log(hobbyArr2);
  return (
    <div>
      <h1>나의 취미</h1>
      <ul>
        {/* {hobbyArr.map((item, index) => (
          <li key={index}>{item}</li>
        ))} */}
        {hobbyArr2}
      </ul>
      <hr />
      <ul>{hobbyArr.map(f)}</ul>
      <hr />
      <ul>
        {hobbyArr.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        {f("신한DS", "A100")}
      </ul>
    </div>
  );
}

export const constTest = 100;
export var varTest = 200;
export function FuncTest1() {
  return <p>FuncTest1</p>;
}
export function FuncTest2() {
  return <p>FuncTest2</p>;
}

export default MyComponentA;
