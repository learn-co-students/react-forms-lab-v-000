import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  updateMessage = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.updateMessage} value={this.state.message} />
        <p>{140-(this.state.message.length)}</p>
      </div>
    );
  }
}

export default TwitterMessage;
