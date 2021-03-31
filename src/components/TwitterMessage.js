import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      text: ''
    };
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    const chars = this.props.maxChars - this.state.text.length
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event => this.handleChange(event)} type="text" name="message" id="message" value={this.state.text} />
        {chars}
      </div>
    );
  }
}

export default TwitterMessage;
