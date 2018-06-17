import React from "react";

const validPoem = poem => {
  const poemLines = poem.split("\n").map(line => line.trim());
  const isRightAmountOfLines = poemLines.length === 3;
  if (poem && isRightAmountOfLines) {
    return (
      poemLines[0].split(" ").length === 5 &&
      poemLines[1].split(" ").length === 3 &&
      poemLines[2].split(" ").length === 5
    );
  } else {
    return false;
  }
};

class PoemWriter extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      isValid: true,
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
      isValid: validPoem(event.target.value),
    })
  }


  render() {
    return (
      <div>
        <textarea value={this.state.value} onChange={this.handleChange} rows="3" cols="60" />
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
