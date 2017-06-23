import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      };
  }
  
  handleChange = event => {
    this.setState({
      value: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          />
          <h2>There are {this.props.maxChars - this.state.value.length} characters left</h2>
      </div>
    );
  }
}

export default TwitterMessage;