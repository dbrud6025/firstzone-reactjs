import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import BoardHome from "component5/BoardHome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmpHome from "component5/EmpHome";

const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log("상수: " + constTest);
// console.log("변수: " + varTest);
//const hobbyArr = ["축구", "게임", "공부", "골프"];
root.render(
  <BrowserRouter>
    {/* <Routes>
      <Route path="/board/*" element={<BoardHome />}></Route>
    </Routes> */}
    <Routes>
      <Route path="/deptemp/*" element={<EmpHome />}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
