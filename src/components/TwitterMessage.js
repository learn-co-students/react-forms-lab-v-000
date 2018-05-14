import React from "react";

export default class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value:''
    };
  };

  updateChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.updateChange} />
        <p>{this.props.maxChars - this.state.value.length}characters remaining </p>
      </div>
    );
  };
};
