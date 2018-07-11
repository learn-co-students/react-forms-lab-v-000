import React from "react";

function validatePoem(poem){
  const poemLines = poem.split('\n');
  return (
    poemLines.length === 3 &&
    poemLines[0].trim().split(' ').length === 5 &&
    poemLines[1].trim().split(' ').length === 3 &&
    poemLines[2].trim().split(' ').length === 5
  );
}

class PoemWriter extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      error: <div id="poem-validation-error" style={{ color: "red" }}>This poem is not written in the right structure!</div>
    };

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event){
    if (validatePoem(event.target.value)){
      this.setState({
        value: event.target.value,
        error: null
      });
    } else {
      this.setState({
        value: event.target.value,
        error: <div id="poem-validation-error" style={{ color: "red" }}>This poem is not written in the right structure!</div>
      });
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.handleOnChange}></textarea>
        {this.state.error}
      </div>
    );
  }
}

export default PoemWriter;