import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    }, () => console.log(this.state.value.length))
  }

  calculateRemainingChars = () => {
    return this.state.value ? this.props.maxChars - this.state.value.length : this.props.maxChars;
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text"
          value={this.state.value}
          onChange={this.handleChange}     
        />
        <span>{this.calculateRemainingChars()} characters remaining.</span>
      </div>
    );
  }
}

export default TwitterMessage;
