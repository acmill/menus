import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Modal, Button, Switch } from "antd";
import DomainSelect from "./DomainSelect";

class DeployApplication extends React.Component {
  state = {
    loading: false,
    visible: false
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Deploy Application
        </Button>
        <Modal
          visible={visible}
          title="Deploy this application to an asset/domain"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>,
            <Button
              key="submit"
              type="primary"
              loading={loading}
              onClick={this.handleOk}
            >
              Submit
            </Button>
          ]}
        >
          <div style={{ margin: "1.5em" }}>
            <span>Select Domain(s)</span>
            <DomainSelect />
          </div>
          <div style={{ margin: "1.5em" }}>
            <span>Attempt to Run After Successful Install?</span>
            <Switch
              defaultChecked
              onChange={console.log("switched")}
              style={{ margin: "1em" }}
            />
          </div>
        </Modal>
      </div>
    );
  }
}

export default DeployApplication;
