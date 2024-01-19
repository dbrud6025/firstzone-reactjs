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
    console.log("LifeCycleClassComponent...render");
    const { title, buttonVisible } = this.state;
    return (
      <div>
        <h1>LifeCycleClassComponent 연습!!! : {title}</h1>
        <button
          onClick={() =>
            this.setState({ title: "보이기!", buttonVisible: true })
          }
        >
          자식 컴포넌트 보이기~~
        </button>
        {buttonVisible && <div></div>}
      </div>
    );
  }
}

class LifeCycleClassComponent2 extends Component {
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
    console.log("LifeCycleClassComponent...render");
    const { title, buttonVisible } = this.state;
    return (
      <div>
        <h1>LifeCycleClassComponent 연습!!! : {title}</h1>
        <button
          onClick={() =>
            this.setState({ title: "보이기!", buttonVisible: true })
          }
        >
          자식 컴포넌트 보이기~~
        </button>
        {buttonVisible && (
          <div>
            <LifeCycleClassComponent2></LifeCycleClassComponent2>
          </div>
        )}
      </div>
    );
  }
}

LifeCycleClassComponent.propTypes = {};

export default LifeCycleClassComponent;
