import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      charLength: 0
    };
  }

  handleOnChange = event => {
    let messageCharCount = event.target.value.length;
    this.setState({
      [event.target.name]: event.target.value,
      charLength: messageCharCount
    })
  }



  render() {
    return (
      <div>
        <div>
          <strong>Your message:</strong>
          <input onChange={this.handleOnChange} type="text" name="message" value={this.state.message} id="message" />
        </div>
        <div>
          Remaining characters: <span>{this.props.maxChars - this.state.charLength}</span>
        </div>
      </div>
    );
  }
}

export default TwitterMessage;
