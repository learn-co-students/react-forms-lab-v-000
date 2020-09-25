import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      charactersRemaining: props.maxChars
    };
  }

  handleChange = (e) => {
    const newMessage = e.target.value;
    this.setState({
      message: newMessage,
      charactersRemaining: this.props.maxChars - newMessage.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={(e) => this.handleChange(e)}
        />
        <h2>Characters Remaining: {this.state.charactersRemaining}</h2>
      </div>
    );
  }
}

export default TwitterMessage;
