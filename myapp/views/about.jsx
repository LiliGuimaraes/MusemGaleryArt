const React = require("react");

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        <div>Hello from {this.props.name}</div>
        <div>birthday {this.props.birthday}</div>
      </div>
    );
  }
}

module.exports = HelloMessage;
