import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      msgLength: 0,
      maxChars: props.maxChars,
      remaining: props.maxChars
    };
  }


  handleChange = event => {
    var myValue = event.target.value;
    this.setState({
      message: myValue,
      msgLength: myValue.length,
      maxChars: this.state.maxChars,
      remaining: this.state.maxChars - myValue.length
    });
  }



  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" value={this.state.message} onChange={(event) => this.handleChange(event)}></input>
        <h3>{this.state.message}</h3>
        <h4>Characters remaining: {this.state.remaining} </h4>
      </div>
    );
  }
}

export default TwitterMessage;
