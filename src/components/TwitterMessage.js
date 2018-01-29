import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: `${this.props.maxChars} characters left`,
    };
  }
  
  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
        value={this.state.value} 
        onChange={this.handleChange} />
      </div>
    );
  }
}

export default TwitterMessage;
