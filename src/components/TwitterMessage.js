import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      charsLeft: 140,
    };

    this.handleMessageChange = this.handleMessageChange.bind(this);
  }

  handleMessageChange(event) {
    this.setState({
      message: event.target.value,
      charsLeft: 140 - event.target.value.length,
    });
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
          value={this.state.message}
          onChange={this.handleMessageChange} />
        <p>{this.state.charsLeft} characters left</p>
      </div>
    );
  }
}

export default TwitterMessage;
