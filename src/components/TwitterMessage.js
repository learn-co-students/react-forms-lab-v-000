import React from "react";

class TwitterMessage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      maxChars: this.props.maxChars,
      remainChars: 0,
      inputValue: ''
    }
  }

  handleChange = (event) => {
    let diff = this.state.maxChars - event.target.value.length
    this.setState({
      remainChars: diff,
      inputValue: event.target.value
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="inputValue" value={this.state.inputValue} onChange={this.handleChange} />
        <p>{this.state.remainChars} characters remaining. Max: {this.props.maxChars}.</p>
      </div>
    );
  }
}

export default TwitterMessage;
