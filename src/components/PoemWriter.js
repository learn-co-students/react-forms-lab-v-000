import React from "react";

const poemIsValid = poem => {
  const poemLines = poem.split("\n").map(x => x.trim());
  const validNumLines = poemLines.length === 3;
  if (poem && validNumLines) {
    return (
      poemLines[0].split(' ').length === 5 &&
      poemLines[1].split(' ').length === 3 &&
      poemLines[2].split(' ').length === 5
    )
  } else {
    return false;
  }
};

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      isValid: true
    };
  }

  handleInput = (event) => {
    const input = event.target.value;

    this.setState({
      value: input,
      isValid: poemIsValid(input)
    });
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.value}
          onChange={this.handleInput}
        />
        {!this.state.isValid ? (
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
        ) : null}
      </div>
    );
  }
}

export default PoemWriter;
