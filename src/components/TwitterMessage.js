import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      counter: 140
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
      counter: 140 - event.target.value.length
    });
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.value} onChange={this.handleChange} />
        <p>{ this.state.counter }</p>
      </div>
    );
  }
}

export default TwitterMessage;
