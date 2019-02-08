import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      characters: this.props.maxChars
    };
  }

  handleChange = event => {
    const charsRemaining = this.props.maxChars - event.target.value.length
    this.setState({
      message: event.target.value,
      characters: charsRemaining
    });
  }

  render() {
    return (
      <div>
        <strong>Your message: ({this.state.characters} remaining) </strong>
        <input type="text" id="message" value={this.state.message} onChange={event => this.handleChange(event)} />
      </div>
    );
  }
}

export default TwitterMessage;
