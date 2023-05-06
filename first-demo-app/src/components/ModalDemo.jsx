import { Component } from "react";

class ModalDemo extends Component {
  render() {
    const { show } = this.props;
    return show && <div>Modal shown</div>;
  }
}

export default ModalDemo;
