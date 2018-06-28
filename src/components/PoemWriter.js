import React from "react";

const isValidPoem = poem => {
  const poemLines = poem.split("\n").map(line => line.trim());
  const correctNumberOfLines = poemLines.length === 3;
  if (poem && correctNumberOfLines) {
    return (
      poemLines[0].split(" ").length === 5 &&
      poemLines[1].split(" ").length === 3 &&
      poemLines[2].split(" ").length === 5
    )
  }
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: "",
      isValidPoem: true,
    };
  }

  setPoemContent = event => {
    const content = event.target.value;
    this.setState({
      content,
      isValidPoem: isValidPoem(content),
    })
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.content} onChange={this.setPoemContent} />
        {!this.state.isValidPoem? (
        <div id="poem-validation-error" style={{ color: "red" }}>
        This poem is not written in the right structure!
        </div>
        ) : null}
        </div>

    );
  }
}

export default PoemWriter;