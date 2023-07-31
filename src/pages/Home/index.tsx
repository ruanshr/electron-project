import React from "react";
import { Button } from "antd";
export default class Home extends React.Component {

  getProcess() {
    window.electronApi?.setTitle("子进程给主进程发送消息")
  }

  render() {
    return (<div>
      <Button type="primary" onClick={this.getProcess}>点击</Button>
    </div>)
  }
}