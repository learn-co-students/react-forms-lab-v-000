import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      textField: ""
    };
  }

  handleChange = event => {
    this.setState({
        textField: event.target.value
    })
}

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="textField" onChange={this.handleChange} value={this.state.textField} />
          <p>{this.props.maxChars - this.state.textField.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
