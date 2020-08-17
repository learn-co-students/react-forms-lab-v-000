import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  render() {
    let charsLeft = this.props.maxChars - this.state.value.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.value} onChange={this.handleChange}  />
        <p>Character Count: {charsLeft} characters left.</p>
      </div>
    );
  }
}

export default TwitterMessage;
