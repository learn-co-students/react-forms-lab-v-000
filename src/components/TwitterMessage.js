import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
        content: '',
        charsLeft: 0
    };
  }

  handleChange = (event) => {
      if(this.state.charsLeft !== 0) {

        let charsCount = event.target.value.split('').length
        this.setState({
            content: event.target.value,
            charsLeft: 140 - charsCount
        })
    } else {
        this.setState({
            content: event.target.value,
            charsLeft: 139
        })
    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={ this.handleChange } value={ this.state.content }/>
        {this.state.charsLeft}--{this.props.maxChars}
      </div>
    );
  }
}

export default TwitterMessage;
