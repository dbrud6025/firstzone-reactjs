import axios from "axios";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function EmpDelete(props) {
  const location = useLocation();
  const employeeId = location.state.employeeId;
  const navi = useNavigate();
  axios({
    method: "delete",
    url: `/rest/deptemp/delete.do/${employeeId}`,
  })
    .then((res) => {
      console.log(res.data);
      alert(res.data);
      navi("/deptemp/list");
    })
    .catch((err) => {
      console.log(err);
    });
  return <div></div>;
}

export default EmpDelete;
