import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          value={this.state.value}
          onChange={this.handleChange}
          type="text" name="message"  id="message" />
          <p> The count is: {this.props.maxChars - this.state.value.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
