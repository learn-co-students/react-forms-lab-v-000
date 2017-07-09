import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      charsLeft: this.props.maxChars
    };
  }

  updateCharsLeft = (e) => {
    this.setState({
      charsLeft: this.props.maxChars - e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.updateCharsLeft} type="text" />
        <p>Remaining Characters: {this.state.charsLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;