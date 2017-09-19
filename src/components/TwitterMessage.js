import React from 'react';

export default class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
      chars: 0
    };
  }

  handleChange = event => {
    if(event.target.value.length <= this.props.maxChars){
      this.setState({
        message: event.target.value,
        chars: event.target.value.length
      })
    }
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.handleChange} /> Remaining Chars: {this.props.maxChars - this.state.chars}
      </div>
    );
  }
}

TwitterMessage.defaultProps = {
  maxChars: 140,
};
