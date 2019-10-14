import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // count: 0,
      value: ""
    };
  }

  changeHandler = event => {
    console.log(event);
    this.setState({
      value: event.target.value
    });
  };

  render() {
    const updateCounter = () => {
      return this.props.maxChars - this.state.value.length;
    };

    return (
      <div>
        <strong>Your message:</strong>
        <p>{updateCounter()} characters left.</p>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.value}
          onChange={this.changeHandler}
        />
      </div>
    );
  }
}

export default TwitterMessage;
