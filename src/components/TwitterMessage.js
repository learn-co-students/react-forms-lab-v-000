import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: "",
      remainingChars: props.maxChars
    };
  }

  handleMessageChange = event => {
    let newChars = this.props.maxChars - event.target.value.length
    this.setState({
      message: event.target.value,
      remainingChars: newChars
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleMessageChange(event)} value={this.state.message} />
        <p>Remaining Characters: {this.state.remainingChars} </p>
      </div>
    );
  }
}

export default TwitterMessage;
