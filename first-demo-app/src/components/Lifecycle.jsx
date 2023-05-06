import { Component } from "react";

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.list,
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps ", props);
    return {
      list: props.list,
    };
  }
  getSnapshotBeforeUpdate(preState) {
    console.log("getSnapshotBeforeUpdate ", preState);
    return {};
  }
  shouldComponentUpdate(state) {
    console.log("ggfghf ", state);
    if (state.list.length > 101) return false;

    return true;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate", this.state);
  }

  render() {
    const { list } = this.state;
    return (
      <>
        <h1 className="text-center">Lifecycle</h1>
        {list.map((li, index) => (
          <div key={index}>{li.first_name}</div>
        ))}
      </>
    );
  }
}

export default LifeCycle;
