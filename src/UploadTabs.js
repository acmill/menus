import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Tabs, Card, Upload, Input } from "antd";
import DragUpload from "./DragUpload";
const { Meta } = Card;

const ScreenshotTabs = () => {
  const { TabPane } = Tabs;
  function callback(key) {
    console.log(key);
  }

  return (
    <Tabs
      tabPosition="left"
      defaultActiveKey="1"
      onChange={callback}
      style={{ margin: "1.5em" }}
    >
      <TabPane tab="Git Repository Link" key="1">
        <Input placeholder="Git URL" />
      </TabPane>
      <TabPane tab="Direct Upload" key="2">
        <DragUpload />
      </TabPane>
    </Tabs>
  );
};

export default ScreenshotTabs;
