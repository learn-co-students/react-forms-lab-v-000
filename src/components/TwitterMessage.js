import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: ""

    };

    this.onChangeHandler = this.onChangeHandler.bind(this);

  }
  onChangeHandler(e){
    let newValue = e.target.value
    this.setState({
      inputValue: newValue
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>

        <input type="text"
        value={this.state.inputValue}
        onChange={this.onChangeHandler}
        />
        {this.props.maxChars - this.state.inputValue.length} Characters left

      </div>
    );
  }
}

export default TwitterMessage;
