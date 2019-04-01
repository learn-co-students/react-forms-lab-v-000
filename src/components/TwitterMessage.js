import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      remainChars: this.props.maxChars
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value ,
      remainChars: this.props.maxChars - e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <span>{this.state.remainChars}</span>
      </div>
    );
  }
}

export default TwitterMessage;
