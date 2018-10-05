import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      inputName: " ",
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="inputName" onChange={event => this.handleChange(event)} value={this.state.inputName} />
        <p>remaining characters: {this.props.maxChars-this.state.inputName.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
