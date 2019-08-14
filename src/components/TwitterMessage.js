import React from "react";

class TwitterMessage extends React.Component {

  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  updateMessage = event => {
    this.setState({
      message: event.target.value,
      // charsLeft: this.props.maxChars - this.state.message.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
          <input 
            type='text'
            name='message' 
            id='message'
            onChange={ event => {this.updateMessage(event)}}
            value={this.state.message}
          />
        <p>
          Chars left: {this.props.maxChars - this.state.message.length}
        </p>
      </div>
    );
  }
}

export default TwitterMessage;
