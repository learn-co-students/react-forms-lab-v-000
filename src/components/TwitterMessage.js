import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
      chars: this.props.maxChars
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value,
      chars: this.props.maxChars - event.target.value.length
    })
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.handleChange} /> Remaining Chars: {this.state.chars}
      </div>
    );
  }
}

export default TwitterMessage;
