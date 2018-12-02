import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      initialMaxChars: this.props.maxChars
    };
  }

  handleChange = event => {
    this.setState({
      initialMaxChars: this.props.maxChars - (this.state.value.length + 1),
      value: event.target.value
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange} />
        <p>{this.state.initialMaxChars} characters remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
