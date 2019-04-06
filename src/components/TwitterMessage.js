import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      charsLeft: 140
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
      charsLeft: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.value}
          onChange={this.handleChange}/>
        <p>{this.state.charsLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
