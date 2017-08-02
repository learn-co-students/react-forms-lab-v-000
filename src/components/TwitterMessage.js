import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      value: '',
      remainingChar: props.maxChars
    };
  }

  updateCharsLeft = (event) => {
    this.setState({
      value: event.target.value,
      remainingChar: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.updateCharsLeft} value={this.state.value}/>
        <p>Remaining characters: {this.state.remainingChar}</p>
      </div>
    );
  }
}

export default TwitterMessage;
