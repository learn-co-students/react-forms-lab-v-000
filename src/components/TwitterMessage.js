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
      value: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} type="text" name="message" id="message" value = {this.state.value}/>
        <br></br>Characters Remaining: {140 - this.state.value.length}
      </div>
    );
  }
}

export default TwitterMessage;
