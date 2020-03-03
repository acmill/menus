import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Tabs, Card } from "antd";
import NewGroup from "./NewGroup";
import LogIn from "./LogIn";
const { Meta } = Card;

const ScreenshotTabs = () => {
  const { TabPane } = Tabs;
  function callback(key) {
    console.log(key);
  }

  return (
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Log In" key="1">
        <LogIn />
      </TabPane>
      <TabPane tab="New Group" key="2">
        <NewGroup />
      </TabPane>
    </Tabs>
  );
};

export default ScreenshotTabs;
