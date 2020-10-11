import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  handleChange = event => {
    this.setState({
      string: event.target.value,
      length: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event => this.handleChange(event)} type="text" name="message" id="message" 
        value={this.state.string}/>
        <div>Max Chars: {this.props.maxChars}</div>
        <div>Number of Chars Left: {this.state.length}</div>
      </div>
    );
  }
}

export default TwitterMessage;
