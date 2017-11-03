import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  handleChange = (event) => {
    if (event.target.value.length <= this.props.maxChars) {
      this.setState({
        value: event.target.value
      });
    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <br />
        {this.props.maxChars - this.state.value.length} chars remaining
      </div>
    );
  }
}

export default TwitterMessage;
