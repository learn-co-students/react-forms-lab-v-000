import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = { message: ''};
  }
  charLimit= (event) => {
    this.setState({
      message: event.target.value,
    }, ()=> console.log(this.state.message))
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
               value={this.state.message}
               onChange={this.charLimit} 
        />
        <label>{this.props.maxChars-this.state.message.length}</label>
      </div>
    );
  }
}

export default TwitterMessage;
