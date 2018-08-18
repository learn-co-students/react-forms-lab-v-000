import React from "react";
import App from "../App"

export default class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: ''};
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
        />
        <p>
        Characters remaining: {this.props.maxChars - this.state.value.length}
        </p>
      </div>
    );
  }
}
