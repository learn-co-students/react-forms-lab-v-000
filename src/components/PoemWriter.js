import React from "react";

const validPoem = poem => {
  const poemLines = poem.split("\n").map(line => line.trim());
  const rightAmountOfLines = poemLines.length === 3;
  if (poem && rightAmountOfLines) {
    return (
      poemLines[0].split(" ").length === 5 &&
      poemLines[1].split(" ").length === 3 &&
      poemLines[2].split(" ").length === 5
    );
  } else {
    return false;
  }
};

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: "",
      isValid: true,
    };
  }

  handlePoemContent = (event) => {
    this.setState({
      content: event.target.value,
      isValid: validPoem(event.target.value),
    })
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.content} onChange={this.handlePoemContent}/>
        {!this.state.isValid? (
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
        ) : null}
      </div>
    );
  }
}
