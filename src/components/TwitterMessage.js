import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
      charsLeft: 140
    };
  }



  handleChange = (event) => {

    this.setState({
      message: event.target.value,
    });

    this.setState((prevState, props) => ({
      charsLeft: prevState.charsLeft - 1,
    }));

  }// end handleClick

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.message}
          onChange={this.handleChange}
          />
        <p>{this.state.charsLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
