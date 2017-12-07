import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
    };
  }


  handleChange = event => {
    this.setState({
      value: event.target.value,
      charsRemaining: this.props.maxChars - event.target.value.length,
    })
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
        <p>You have {this.state.charsRemaining ? this.state.charsRemaining : this.props.maxChars } characters remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
