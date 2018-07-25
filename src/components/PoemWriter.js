import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      valid: true,
    };
  }

  handleChange = event => {
    let poem = event.target.value;
    this.setState({
      value: poem,
      valid: this.validatePoem(poem)
    })
  }

  validatePoem = poem => {
    let poemArray = poem.split("\n").map(line => line.trim());
    if (poemArray.length !== 3) {
      return false;
    } else if (poemArray[0].split(" ").length !== 5) {
      return false;
    } else if (poemArray[1].split(" ").length !== 3) {
      return false;
    } else if (poemArray[2].split(" ").length !== 5) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.handleChange} />
        {!this.state.valid ? (
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
        ) : null}
      </div>
    );
  }
}

export default PoemWriter;
