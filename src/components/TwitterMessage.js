import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      content: ''
    };
  }

  handleChange = event => {
    this.setState({
      content: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.content} onChange={this.handleChange} />
        <strong>Remaining characters: {this.props.maxChars - this.state.content.length}</strong>
      </div>
    );
  }
}

export default TwitterMessage;
