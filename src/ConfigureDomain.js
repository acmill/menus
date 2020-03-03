import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Modal, Button } from "antd";
import DomainLogs from "./DomainLogs";
import DomainButtons from "./DomainButtons";

class ConfigureDomain extends React.Component {
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
          Configure Domain
        </Button>
        <Modal
          visible={visible}
          title="Configure application _APPNAME_ on domain _DOMAIN#_"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>
          ]}
        >
          <div style={{ margin: "2em" }}>
            <span style={{ paddingBottom: "1em" }}>
              <b>Status Output</b>
            </span>{" "}
            <DomainLogs />
          </div>
          <hr />
          <div style={{ margin: "2em" }}>
            <span>
              <b>Configuration Options</b>
            </span>{" "}
            <DomainButtons />
          </div>
        </Modal>
      </div>
    );
  }
}

export default ConfigureDomain;
