import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
    };
  }

  maxChars = this.props

  handleChange = (e) => {
    if(this.props.maxChars - this.state.value.length > 0) {
      this.setState({
        value: e.target.value,
      })

    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.value} />
        {this.props.maxChars - this.state.value.length} Characters Remaining
      </div>
    );
  }
}

export default TwitterMessage;
