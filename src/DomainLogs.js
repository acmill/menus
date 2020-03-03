import React, { Component, useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { VariableSizeGrid as Grid } from "react-window";
import ResizeObserver from "rc-resize-observer";
import classNames from "classnames";
import { Timeline, Button } from "antd";

class DomainLogs extends Component {
  state = {
    reverse: false
  };

  handleClick = () => {
    this.setState({ reverse: !this.state.reverse });
  };

  render() {
    return (
      <div>
        <Timeline pending="Recording..." reverse={this.state.reverse}>
          <Timeline.Item>Status1 2020-02-28</Timeline.Item>
          <Timeline.Item>Status2 2020-02-28</Timeline.Item>
          <Timeline.Item>Status3 2020-02-29</Timeline.Item>
        </Timeline>
      </div>
    );
  }
}
export default DomainLogs;
