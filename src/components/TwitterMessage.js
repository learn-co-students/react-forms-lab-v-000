import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super();
    // one prop is maxChars
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      counter: 0,
      charLeft: props.maxChars,
      value: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      counter: this.state.counter + 1,
      charLeft: this.state.charLeft - 1,
      value: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <p>You have {this.state.charLeft} characters left.</p>
      </div>
    );
  }
}

export default TwitterMessage;
