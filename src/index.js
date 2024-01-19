import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import MyCar from "./component1/MyCar";
// import ComponentTest from "./component1/ComponentTest";
// import MyComponentA, {
//   MyComponentB,
//   constTest,
//   varTest,
//   FuncTest1,
//   FuncTest2,
// } from "./component2/JSXTest";
// import MyComponentC from "component2/CSSTest";
//import MyComponentD from "component2/PropsTest";
//import YourComponent1, { YourComponent2 } from "component2/YourComponent";
//import StateTest from "component2/StateTest";
import StateClassComponent from "component3/StateClassComponent";
//import StateFunctionComponent from "component3/StateFunctionComponent";
import FunctionComponent, {
  FunctionComponent2,
  FunctionComponent3,
} from "component3/FunctionComponent";
import LifeCycleClassComponent from "component3/LifeCycleClassComponent";
import LifeCycleFunctionComponent from "component3/LifeCycleFunctionComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log("상수: " + constTest);
// console.log("변수: " + varTest);
//const hobbyArr = ["축구", "게임", "공부", "골프"];
root.render(
  <>
    <LifeCycleFunctionComponent></LifeCycleFunctionComponent>
    <LifeCycleClassComponent></LifeCycleClassComponent>
    <FunctionComponent2></FunctionComponent2> <hr />
    <FunctionComponent3></FunctionComponent3> <hr />
    <StateClassComponent></StateClassComponent> <hr />
    {/* <FunctionComponent></FunctionComponent> <hr />
    <StateClassComponent></StateClassComponent> <hr />
    <StateFunctionComponent></StateFunctionComponent> <hr /> */}
    {/*<ComponentTest></ComponentTest>
     <MyCar />
    <hr />
    <MyCar />*/}
    {/* <MyComponentA></MyComponentA>
    <MyComponentB></MyComponentB>
    <FuncTest1></FuncTest1>
    <FuncTest2></FuncTest2> */}
    {/* <MyComponentC></MyComponentC> */}
    {/* <MyComponentD></MyComponentD>*/}
    {/* <YourComponent1 myname="양유경" myage={25} hobby={hobbyArr}>
      1.함수 Component로 만들기
    </YourComponent1>
    <YourComponent2 myname="양유경" myage={25} hobby={hobbyArr}>
      2.클래스 Component로 만들기
    </YourComponent2>
    <hr></hr>

    <StateTest></StateTest>
    <App /> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
