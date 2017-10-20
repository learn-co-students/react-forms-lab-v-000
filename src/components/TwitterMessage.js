import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  updateMessage = event => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.updateMessage}/>
        <p>{this.props.maxChars - this.state.value.length} chars remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;


