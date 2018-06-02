import React, {Component} from "react";
import Mousetrap from "mousetrap";
import "./index.css";

class Shortcuts extends Component {
  state = {
    show: false
  };

  componentDidMount() {
    this.props.bind.forEach(({keys, fn}) => Mousetrap.bind(keys, fn));
    Mousetrap.bind("?", () => this.setState({show: !this.state.show}));
  }

  componentWillUnmount() {
    this.props.bind.forEach(({keys}) => Mousetrap.unbind(keys));
    Mousetrap.unbind("?");
  }

  render() {
    const {show} = this.state;
    const {bind} = this.props;

    if (!show) {
      return "";
    }

    return (
      <div className="Shortcuts" onClick={() => this.setState({show: !show})}>
        <div className="Shortcuts--content">
          <h3>Tangentbordsgenvägar</h3>
          <ul>
            {bind.map(({keys, help}) => (
              <li key={keys.join("/")}>
                <span>{keys.map(x => <kbd key={x}>{x}</kbd>)}</span> {help}
              </li>
            ))}
            <li><span><kbd>?</kbd></span> Denna hjälptext</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Shortcuts;
