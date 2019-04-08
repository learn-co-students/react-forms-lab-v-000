import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
      <form onSubmit={event => this.handleSubmit(event)}>
        <strong>Your message:</strong>
        <input type="text"
               name="message"
               id="message"
               value={this.state.message}
               onChange={this.handleChange}  />
      </form>
        chars left: {this.props.maxChars - this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
