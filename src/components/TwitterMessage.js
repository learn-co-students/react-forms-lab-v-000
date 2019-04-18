import React from "react";

class TwitterMessage extends React.Component {
  constructor(prop) {
    super(prop);

    this.state = {
      message: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" id="message"
          onChange={event => this.handleChange(event)}
          value={this.state.message}/>
        <p>{this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
