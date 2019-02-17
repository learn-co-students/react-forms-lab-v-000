import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {maxChars: 140, message: ''};
  }

  handleChange = (e) =>{
    this.setState({
      maxChars: (140 - e.target.value.length),
      message: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
          value={this.state.message}
          onChange={e => this.handleChange(e)}/>
        <p>{this.state.maxChars} chars left</p>
      </div>
    );
  }
}

export default TwitterMessage;
