import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  handleChange = event => {
    this.setState({
      content: event.target.value,
    });
  }

  remainingCharacters = () => (this.props.maxChars - this.state.content.length)

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="content" value={this.state.content} onChange={this.handleChange}/>
        <p>{this.remainingCharacters()} remaining characters</p>
      </div>
    );
  }
}

export default TwitterMessage;
