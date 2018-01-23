import React from "react";


const validChecker = poemContent => {
  const poemLines = poemContent.split("\n").map(line => line.trim());
  const lengthCorrect = poemLines.length === 3;
  if (poemContent && lengthCorrect) {
    return (
      poemLines[0].split(" ").length === 5 &&
      poemLines[1].split(" ").length === 3 &&
      poemLines[2].split(" ").length === 5
    );
  } else {
    return false;
  }
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: "",
      isValid: true,
    };
  }

  setContent = event => {
    var currentContent = event.target.value;
    this.setState({
     currentContent,
     isValid: validChecker(currentContent),
   });
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.content}
          onChange={this.setContent}
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
