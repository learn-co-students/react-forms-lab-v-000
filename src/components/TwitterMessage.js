import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      characters: ""
    };
  }

  handleType = (e) => {
    this.setState({
      characters: e.target.value
    })
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleType} value={this.state.characters}/>
      <h2>{this.props.maxChars - this.state.characters.length}</h2>
      </div>
    );
  }
}

export default TwitterMessage;
