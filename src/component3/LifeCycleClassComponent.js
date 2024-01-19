import React, { Component } from "react";
import PropTypes from "prop-types";

class LifeCycleClassComponent extends Component {
  constructor(props) {
    super(props);
    console.log("LifeCycleClassComponent........constructor");
  }

  componentDidMount() {
    console.log("LifeCycleClassComponent........componentDidMount (생성됨)");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("LifeCycleClassComponent........shouldComponentUpdate");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("LifeCycleClassComponent........componentDidUpdate (수정됨)");
  }

  componentWillUnmount() {
    console.log("LifeCycleClassComponent........componentWillUnmount (제거)");
  }

  render() {
    return (
      <div>
        <h1>LifeCycleClassComponent 연습!!!</h1>
      </div>
    );
  }
}

LifeCycleClassComponent.propTypes = {};

export default LifeCycleClassComponent;
