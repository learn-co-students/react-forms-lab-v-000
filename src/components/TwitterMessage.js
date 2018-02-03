import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      remainingChars: ''
    };
  }

  handleChange = (event) => {
    let val = this.props.maxLength - event.target.value;

    this.setState({
      remainingChars: val,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          value={this.state.remainingChars}
          onChange={this.handleChange} />
      </div>
    );
  }
}

export default TwitterMessage;
