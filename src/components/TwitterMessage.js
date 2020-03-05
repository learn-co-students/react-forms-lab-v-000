import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
      tweets: []
    };
  }

  handleMessageChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    let formData = this.state.message
    this.state.tweets.push(formData)
    console.log(this.state.tweets)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="text"
            name="message"
            id="message"
            onChange={event => this.handleMessageChange(event)}
            value={this.state.message}
          />
        </form>
        <i>Remaining characters:</i> <strong>{this.props.maxChars - this.state.message.length}</strong>
      </div>
    );
  }
}

export default TwitterMessage;
