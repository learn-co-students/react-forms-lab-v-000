import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      characters: ''
    };

  }

  handleChange = (event) => {
    this.setState({characters: event.target.value})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.characters} onChange={this.handleChange} />
        <p>Remaining characters: {this.props.maxChars - this.state.characters.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
