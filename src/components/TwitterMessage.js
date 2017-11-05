import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      maxChars: props.maxChars,
      count: props.maxChars

    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });

  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" 
        value={this.state.value}
        onChange={this.handleChange}
        />
        <p>{this.props.maxChars}</p>
        <p>Counter: {this.props.maxChars - this.state.value.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
