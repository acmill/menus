import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Modal, Button } from "antd";
import Complete from "./Complete";
import UploadTabs from "./UploadTabs";
import VersionCompatibilities from "./VersionCompatibilities";
class NewVersion extends React.Component {
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
          New Version
        </Button>
        <Modal
          visible={visible}
          title="Add or update a version"
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
          <div style={{ margin: "2em" }}>
            <span>
              <b>Version Number</b>
            </span>{" "}
            <Complete />
          </div>

          <div style={{ margin: "2em" }}>
            <span>
              <b>Version Compatibilities</b>
            </span>{" "}
            <VersionCompatibilities />
          </div>

          <div style={{ margin: "2em" }}>
            <span>
              <b>Version Upload Options</b>
            </span>{" "}
            <UploadTabs />
          </div>
        </Modal>
      </div>
    );
  }
}

export default NewVersion;
