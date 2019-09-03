import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
      counter: 140,
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value,
      counter: this.state.counter - 1, 
    });
  }

  render() {
    return (
      <div>
        <p>Max Characters = {this.props.maxChars} </p>
        <p>Remaining Characters = {this.state.counter} </p>

        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message" 
          id="message" 
          value={this.state.message}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default TwitterMessage;
