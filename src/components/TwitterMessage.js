import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    message: "" ,
    remainingCharacters: props.maxChars
    };
  }

  handleChange = (event) => {this.setState({remainingCharacters: this.state.remainingCharacters - 1, message: event.target.value} )}

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.message} />
        you have {this.state.remainingCharacters}
      </div>
    );
  }
}

export default TwitterMessage;
