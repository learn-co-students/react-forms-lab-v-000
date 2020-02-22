import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  characterCount = () => {
    return !!this.state.value ? this.props.maxChars - this.state.value.length : this.props.maxChars
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.value || ''}/>
        <p><i>You have {this.characterCount()} characters left</i></p>
      </div>
    );
  }
}

export default TwitterMessage;
