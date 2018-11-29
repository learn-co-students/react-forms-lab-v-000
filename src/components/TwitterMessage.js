import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      content: ''
    };
  }

  handleContent = (event) => {
    this.setState({
      content: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message: ({this.props.maxChars - this.state.content.length})</strong>
        <input type="text" onChange={this.handleContent} value={this.state.content} />
      </div>
    );
  }
}

export default TwitterMessage;
