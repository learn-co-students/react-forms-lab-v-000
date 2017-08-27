import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chars: props.maxChars,
    };
  }

  handleChange = event => {
    this.setState({
      chars: (this.state.chars - 1 ),
      value: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          value={this.state.value}
          onChange={this.handleChange}
        />
        Remaining char: {this.state.chars}
      </div>
    );
  }
}

export default TwitterMessage;