import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <p>{this.props.maxChars - this.state.value.length} characters remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;


//this.state.value.length
//this.props.maxChars