import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      remainingChars: this.props.maxChars,
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
        <input type="text" onChange={this.handleChange} value={this.state.content} />
        <p>{this.props.maxChars - this.state.content.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
