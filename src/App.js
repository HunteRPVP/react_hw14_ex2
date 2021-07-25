import React, { Component } from "react";
import { observer } from "mobx-react";
import "./App.css";
import { appStore } from "./Store";

class App extends Component {
  handleIncrement = () => {
    appStore.increment();
  };
  handleDecrement = () => {
    appStore.decrement();
  };
  render() {
    return (
      <div>
        <h1>{appStore.count}</h1>
        <button onClick={this.handleDecrement}>-1</button>
        <button onClick={this.handleIncrement}>+1</button>
      </div>
    );
  }
}

export default observer(App);
