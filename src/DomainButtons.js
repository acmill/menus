import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Button } from "antd";

function DomainButtons() {
  return (
    <div style={{ display: "block" }}>
      <Button type="primary" style={{ margin: ".5em" }}>
        Start
      </Button>
      <Button type="primary" danger style={{ margin: ".5em" }}>
        Uninstall Application
      </Button>
      <Button type="link" style={{ margin: ".5em" }}>
        Application Profile{" "}
      </Button>
    </div>
  );
}
export default DomainButtons;
