import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = (e) => {
    if (e.target.value.length <= 140) {
      this.setState({
        message: e.target.value
      })
    }
  }

  remainingChars = () => { return (140 - this.state.message.length) }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
               name="message"
               value={this.state.message}
               onChange={e => this.handleChange(e)} />
        <p id="remainingChars">{this.remainingChars()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
