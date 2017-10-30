import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: "",
      charCounter: this.props.maxChars
    };
  }

  handleChange = (event) => {
    this.setState({
      inputText: event.target.value,
      charCounter: this.state.charCounter - 1
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.inputText}
          onChange={this.handleChange}/>
        <p> Remaining Character: {this.state.charCounter} </p>
      </div>
    );
  }
}

export default TwitterMessage;
