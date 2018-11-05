import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
    console.log(e.target.value.length)
  }

  remainingChars = () => {
    return this.props.maxChars - this.state.value.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <p> {this.remainingChars()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
