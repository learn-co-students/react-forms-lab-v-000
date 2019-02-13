import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      maxChars: '',
      firstName: ''
    };
  }

  handleFirstNameChange = (event) => {
    debugger
    this.setState({
      firstName: event.target.value,
      maxChars: Number(event.target.value.length)
   })
 }

  render() {
    return (
      <div>
        <strong>Your message:{this.props.maxChars - this.state.maxChars}</strong>
        <input
        type="text"
        id="message"
        onChange={event => this.handleFirstNameChange(event)}
        value={this.state.firstName}
        values={this.props.maxChars}
        />
      </div>
    );
  }
}

export default TwitterMessage;
