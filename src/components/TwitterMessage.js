import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      textLength: 0,
    };
  }

  handleChange = event => {
    const maxLength = parseInt(this.props.maxChars, 10);
    this.setState({
      value: event.target.value,
      textLength: maxLength - event.target.value.length,
    });

  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
        value={this.state.value}
        onChange={this.handleChange}
        />
        <p>Remaining Characters {this.state.textLength} / {this.props.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
