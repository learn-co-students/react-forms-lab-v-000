import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      content: ""
    };
  }

  handleMessageChange = (event) => {
    this.setState({
      content: event.target.value})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.content} onChange={this.handleMessageChange}/>
        {this.props.maxChars-this.state.content.length}
      </div>
    );
  }
}

export default TwitterMessage;
