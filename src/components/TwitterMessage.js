import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      maxChars: 140
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    var input = event.target.value;
    this.setState({ value: event.target.value, maxChars: 140 - input.length });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder='Just a placeholder'
          maxChars={140}
        />
        Characters Left: {this.state.maxChars}
      </div >

    );
  }
}

export default TwitterMessage;
