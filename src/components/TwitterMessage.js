import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      value: ''
    };
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.value}/>
        <br/>
        <strong>Remaining characters: {this.props.maxChars - this.state.value.length}</strong>
      </div>
    );
  }
}

export default TwitterMessage;
