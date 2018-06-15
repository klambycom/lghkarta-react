import React, {Component} from "react";

const asyncComponent = importFn => {
  class AsyncComponent extends Component {
    state = {
      component: null
    };

    async componentDidMount() {
      const {default: component} = await importFn();
      this.setState({component});
    }

    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  }

  return AsyncComponent;
};

export default asyncComponent;
