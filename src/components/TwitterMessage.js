import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      remainingChars: props.maxChars
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
      remainingChars: this.props.maxChars - event.target.value.length
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
        <p>{this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;