import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { List, Card } from "antd";
import ConfigureDomain from "./ConfigureDomain";
import DeployApplication from "./DeployApplication";
import NewVersion from "./NewVersion";
import FormTabs from "./FormTabs";

const data = [
  {
    title: "Configure App on Domain",
    content: (
      <div>
        <div style={{ margin: "1em" }}>
          <span>
            This button would be located on each domain dropdown item - each
            item represents one application installed on the domain.
          </span>
        </div>
        <div style={{ alignItems: "center" }}>
          <ConfigureDomain />
        </div>
      </div>
    )
  },
  {
    title: "Deploy Application",
    content: (
      <div>
        <div style={{ margin: "1em" }}>
          <span>
            This button would be located on each application profile page.
          </span>
        </div>
        <div style={{ alignItems: "center" }}>
          <DeployApplication />
        </div>
      </div>
    )
  },
  {
    title: "New Version",
    content: (
      <div>
        <div style={{ margin: "1em" }}>
          <span>
            This popup would be used when Project authors or owners click on the
            'New Version' button on the project profile page.
          </span>
        </div>
        <div style={{ margin: "2em" }}>
          <NewVersion />
        </div>
      </div>
    )
  }
];

ReactDOM.render(
  <div id="main-container">
    <h2>
      Below is a list of submenus and forms that would be located on the
      platform.
    </h2>
    <div>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3
        }}
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Card hoverable title={item.title}>
              {item.content}
            </Card>
          </List.Item>
        )}
      />
    </div>
    <hr />
    <div>
      <FormTabs />
    </div>
  </div>,

  document.getElementById("container")
);
