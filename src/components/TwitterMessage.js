import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      remaining: props.maxChars
    };
  }

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <p>{this.props.maxChars - this.state.inputValue.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
