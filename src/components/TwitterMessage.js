import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      input: '',
      charsRemaining: props.maxChars
    };
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
      charsRemaining: this.props.maxChars - e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.input} onChange={this.handleChange}/>
        <p>{this.state.charsRemaining}</p>
      </div>
    );
  }
}

export default TwitterMessage;