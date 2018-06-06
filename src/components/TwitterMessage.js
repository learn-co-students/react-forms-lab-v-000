import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  changeHandler = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          value={this.state.value}
          onChange={this.changeHandler}
        />
        <p>You have {(this.props.maxChars - this.state.value.length)} remaining.</p>
      </div>
    );
  }
}

export default TwitterMessage;
