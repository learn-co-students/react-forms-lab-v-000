import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      counter: 0
    };
  }

  handleChange(event, characters) {
    this.setState({value: event.target.value, counter: characters-1})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        Max Characters: {this.props.maxChars}
        Remaining Characters: {this.state.counter}
        <input type="text" onChange={(event) => this.handleChange(event, this.props.maxChars)} value={this.state.value} />
      </div>
    );
  }
}

export default TwitterMessage;
