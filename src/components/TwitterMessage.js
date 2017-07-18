import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current_input: "",
      chars_left: props.maxChars
    };
  }

  handleInput(event){
    this.setState({
      current_input: event.target.value,
      chars_left: this.props.maxChars - event.target.value.length
    });
  }

  render() {
    return (
      <div>
        <strong>{this.state.chars_left} characters left </strong>
        <input type="text" onChange={this.handleInput.bind(this)} value={this.state.current_input}/>
      </div>
    );
  }
}

export default TwitterMessage;