import React from "react";

class TwitterMessage extends React.Component {
  constructor(prop) {
    super(prop);

    this.state = {
      remChars: this.props.maxChars,
      message: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      remChars: this.state.remChars - 1,
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
        <p>{this.state.remChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
